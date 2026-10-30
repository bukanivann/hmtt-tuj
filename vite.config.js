import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {
  convertAllImagesToWebp,
  convertSingleImageToWebp,
  updateSourceCodeReferences,
} from './scripts/convert-to-webp.mjs';

function autoConvertToWebpPlugin() {
  return {
    name: 'auto-convert-to-webp',
    async buildStart() {
      await convertAllImagesToWebp();
    },
    closeBundle() {
      const srcImgDir = path.resolve(process.cwd(), 'IMG');
      const destImgDir = path.resolve(process.cwd(), 'dist', 'IMG');
      if (fs.existsSync(srcImgDir)) {
        fs.cpSync(srcImgDir, destImgDir, { recursive: true });
      }
    },
    configureServer(server) {
      const imgDir = path.resolve(process.cwd(), 'IMG');
      server.watcher.add(imgDir);

      const handleFile = async (filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext) && filePath.includes(`${path.sep}IMG${path.sep}`)) {
          await convertSingleImageToWebp(filePath, true);
          updateSourceCodeReferences();
        }
      };

      server.watcher.on('add', handleFile);
      server.watcher.on('change', handleFile);
    },
  };
}

export default defineConfig({
  plugins: [autoConvertToWebpPlugin(), react()],
  server: {
    port: 5173,
    open: true,
  },
});
