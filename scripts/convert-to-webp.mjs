import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Matikan cache sharp agar tidak mengunci file di Windows saat menghapus file asli
sharp.cache(false);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT_DIR, 'IMG');
const SRC_DIR = path.join(ROOT_DIR, 'src');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const CODE_EXTENSIONS = new Set(['.jsx', '.js', '.ts', '.tsx', '.html', '.css']);

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

export async function convertSingleImageToWebp(filePath, removeOriginal = true) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return null;
  if (!fs.existsSync(filePath)) return null;

  const parsed = path.parse(filePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

  try {
    const inputBuffer = fs.readFileSync(filePath);
    await sharp(inputBuffer)
      .rotate() // Pertahankan orientasi EXIF foto
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);

    if (removeOriginal && fs.existsSync(webpPath) && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    const relFrom = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const relTo = path.relative(ROOT_DIR, webpPath).replace(/\\/g, '/');
    console.log(`[WebP Converter] Berhasil: ${relFrom} -> ${relTo}`);
    return webpPath;
  } catch (err) {
    console.error(`[WebP Converter] Gagal mengubah ${filePath}:`, err.message);
    return null;
  }
}

export function updateSourceCodeReferences() {
  const codeFiles = [
    ...getAllFiles(SRC_DIR).filter((f) => CODE_EXTENSIONS.has(path.extname(f).toLowerCase())),
    path.join(ROOT_DIR, 'index.html'),
  ].filter((f) => fs.existsSync(f));

  // Ganti semua referensi IMG/...(.jpg|.JPG|.jpeg|.JPEG|.png|.PNG) menjadi .webp (termasuk nama file dengan spasi)
  const imgRefRegex = /(IMG\/[^"'`\n\r)]+?)\.(jpe?g|png)\b/gi;

  for (const file of codeFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(imgRefRegex, '$1.webp');
    if (updated !== content) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log(
        `[WebP Converter] Referensi kode diperbarui di: ${path.relative(ROOT_DIR, file)}`
      );
    }
  }
}

export async function convertAllImagesToWebp() {
  const allImgFiles = getAllFiles(IMG_DIR);
  const targetFiles = allImgFiles.filter((f) =>
    IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase())
  );

  if (targetFiles.length > 0) {
    console.log(
      `[WebP Converter] Menemukan ${targetFiles.length} gambar untuk dikonversi ke .webp...`
    );
    for (const filePath of targetFiles) {
      await convertSingleImageToWebp(filePath, true);
    }
  }

  updateSourceCodeReferences();
}

// Jalankan langsung jika dipanggil via CLI: node scripts/convert-to-webp.mjs
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  convertAllImagesToWebp().then(() => {
    console.log('[WebP Converter] Selesai! Semua gambar telah berformat .webp.');
  });
}
