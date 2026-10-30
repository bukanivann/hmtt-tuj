import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';

export const DIVISI_ITEMS = [
  {
    id: 'keilmuan',
    title: '1. Keilmuan (Akademik & Non-Akademik)',
    shortTitle: 'Departemen Keilmuan',
    img: 'IMG/Profile/Kelompok/DepKEILMUAN.webp',
    divisiNaungan: ['Divisi Akademik', 'Divisi Non Akademik'],
    pimpinan: 'Kadep: Naufal Rafif | Kadiv: M. Ridho Hibatullah & Roby Syawal F.',
    details: [
      {
        name: 'Divisi Akademik',
        desc: 'Divisi ini bertanggung jawab untuk meningkatkan pengetahuan mahasiswa/i Teknik Telekomunikasi dalam bidang akademik dan membantu prodi dalam kegiatan akademik.',
      },
      {
        name: 'Divisi Non Akademik',
        desc: 'Divisi ini melakukan kegiatan diluar dari akademik yang dipelajari di prodi Teknik Telekomunikasi seperti pembuatan alat bersama, pengenalan website, ataupun yang lain-lain.',
      },
    ],
    divisionsGallery: [
      {
        divisiName: 'Divisi Akademik',
        kadiv: 'M. Ridho Hibatullah.',
        items: [
          {
            title: 'Workshop Jaringan & IoT Prototyping',
            desc: 'Pelatihan perancangan perangkat Internet of Things dan simulasi jaringan telekomunikasi.',
            img: 'IMG/Acara/WorkshopIOT.webp',
          },
          {
            title: 'Hands-On Mikrokontroler & Praktikum IoT',
            desc: 'Praktik langsung integrasi sensor dan mikrokontroler bersama mahasiswa Teknik Telekomunikasi.',
            img: 'IMG/Acara/WorkshopIOT25.webp',
          },
          {
            title: 'Seminar Nasional Elektro & Telekomunikasi',
            desc: 'Seminar keilmuan membahas perkembangan infrastruktur jaringan, 5G, dan teknologi masa depan.',
            img: 'IMG/Acara/Seminar Elektro.webp',
          },
          {
            title: 'Kelas Responsi UTS & UAS Mahasiswa',
            desc: 'Pendampingan belajar mata kuliah inti Teknik Telekomunikasi menjelang ujian semester.',
            img: 'IMG/Profile/Kelompok/FotoAka.webp',
          },
        ],
      },
      {
        divisiName: 'Divisi Non Akademik',
        kadiv: 'Roby Syawal F.',
        items: [
          {
            title: 'Workshop Pengembangan Kompetensi Non-Akademik',
            desc: 'Pelatihan keterampilan penunjang, kompetisi, dan pengembangan karya inovatif mahasiswa.',
            img: 'IMG/Acara/FotoBersamaWorkshopNONAKA.webp',
          },
          {
            title: 'Delegasi Expo & Pameran Inovasi Mahasiswa',
            desc: 'Partisipasi pameran karya teknologi dan proyek riset mahasiswa di tingkat kampus maupun nasional.',
            img: 'IMG/Acara/ExpoBTC.webp',
          },
          {
            title: 'Kegiatan & Pembinaan Tim Non-Akademik',
            desc: 'Koordinasi serta pendampingan delegasi mahasiswa dalam ajang perlombaan non-akademik.',
            img: 'IMG/Profile/Kelompok/FotoNonAka.webp',
          },
        ],
      },
    ],
  },
  {
    id: 'pm',
    title: '2. Pengembangan Mahasiswa (PSDM & Minbak)',
    shortTitle: 'Departemen Pengembangan Mahasiswa',
    img: 'IMG/Profile/Kelompok/DepPM.webp',
    divisiNaungan: [
      'Divisi Pengembangan Minat dan Bakat',
      'Divisi Pengembangan Sumber Daya Manusia',
    ],
    pimpinan: 'Kadep: Ravanata Adha | Kadiv: Dian Wahyuningsih & M. Daffa Tajriansyah',
    details: [
      {
        name: 'Divisi Pengembangan Minat dan Bakat',
        desc: 'Divisi ini berperan untuk mencari lomba atau kompetisi baik dalam bidang akademik, non akademik, olahraga, e-sport, dan lainnya.',
      },
      {
        name: 'Divisi Pengembangan Sumber Daya Manusia',
        desc: 'Divisi ini berperan untuk dalam bidang pendataan serta pengelola sumber daya mahasiswa yang mempunyai tujuan utama untuk mencari, mengembangkan kemampuan softskill dan keilmuan pada semua individu, khususnya Mahasiswa Teknik Telekomunikasi, dan menambah wawasan seputar dunia telekomunikasi dan perkembangan industri digital.',
      },
    ],
    divisionsGallery: [
      {
        divisiName: 'Divisi Pengembangan Sumber Daya Manusia',
        kadiv: 'Dian Wahyuningsih.',
        items: [
          {
            title: 'Latihan Dasar Kepemimpinan Mahasiswa (LDKM)',
            desc: 'Program kaderisasi untuk membentuk karakter kepemimpinan, swadisiplin, dan solidaritas mahasiswa.',
            img: 'IMG/Acara/FotoBersamaLDKM.webp',
          },
          {
            title: 'Kaderisasi & Pembinaan Karakter Anggota',
            desc: 'Pendampingan dan pengembangan potensi diri mahasiswa S1 Teknik Telekomunikasi.',
            img: 'IMG/Acara/LDKM2023.webp',
          },
          {
            title: 'Panitia Regenerasi & Upgrading Pengurus',
            desc: 'Penyelenggaraan seleksi kepengurusan baru serta penguatan kapasitas internal organisasi.',
            img: 'IMG/Profile/Kelompok/FotoPM.webp',
          },
        ],
      },
      {
        divisiName: 'Divisi Pengembangan Minat dan Bakat',
        kadiv: 'M. Daffa Tajriansyah.',
        items: [
          {
            title: 'Kegiatan Olahraga, Runshoot & Fun Match',
            desc: 'Wadah penyaluran hobi olahraga, kebugaran, dan kebersamaan antar mahasiswa Teknik Telekomunikasi.',
            img: 'IMG/Acara/FotoBersamaRUNSHOOT.webp',
          },
          {
            title: 'Komunitas Seni, E-Sport & Minat Bakat',
            desc: 'Pengembangan potensi non-teknis mahasiswa di bidang olahraga, seni, dan turnamen e-sport.',
            img: 'IMG/Profile/Kelompok/FotoMinbak.webp',
          },
        ],
      },
    ],
  },
  {
    id: 'medkom',
    title: '3. Media & Komunikasi (Media, Creative, KWH)',
    shortTitle: 'Departemen Media & Komunikasi',
    img: 'IMG/Profile/Kelompok/DepMEDKOM.webp',
    divisiNaungan: [
      'Divisi Media Development',
      'Divisi Creative Information',
      'Divisi Kewirausahaan',
    ],
    pimpinan: 'Kadep: Jessica Indaref | Kadiv: Marsell Anraymond P., Nona Sabrina & Alex Bima A.',
    details: [
      {
        name: 'Divisi Media Development',
        desc: 'Divisi yang berfungsi sebagai pengelola akun media sosial dan menjadi perantara dalam persebaran informasi di HMTT. Departemen Media Development juga membuat video kreatif sebagai penunjang program kerja di HMTT.',
      },
      {
        name: 'Divisi Creative Information',
        desc: 'Divisi yang bertanggung jawab atas segala bentuk visual sebagai penunjang media informasi program kerja HMTT atau sering dikatakan sebagai content planner dan design.',
      },
      {
        name: 'Divisi Kewirausahaan',
        desc: 'Divisi yang berfungsi untuk menyediakan dana yang dibutuhkan selama kepengurusan HMTT berlangsung dengan melakukan berbagai inovasi dalam berwirausaha yang akan mendukung pemasukan kas HMTT yang akan digunakan sebagai anggaran rumah tangga himpunan salah satunya seperti membuat identitas himpunan.',
      },
    ],
    divisionsGallery: [
      {
        divisiName: 'Divisi Media Development',
        kadiv: 'Marsell Anraymond P.',
        items: [
          {
            title: 'Pengelolaan Kanal Informasi & Media Sosial Resmi',
            desc: 'Publikasi informasi akademik, kemahasiswaan, dan liputan kegiatan HMTT TUJ secara berkala.',
            img: 'IMG/Profile/Kelompok/DivisiMD.webp',
          },
          {
            title: 'Manajemen Website & Branding Digital Himpunan',
            desc: 'Pengembangan media informasi digital sebagai wajah resmi HMTT Telkom University Jakarta.',
            img: 'IMG/Profile/Kelompok/Medkom.webp',
          },
        ],
      },
      {
        divisiName: 'Divisi Creative Information',
        kadiv: 'Nona Sabrina.',
        items: [
          {
            title: 'Desain Visual Feeds Instagram & Konten Kreatif',
            desc: 'Perancangan identitas visual, poster kegiatan, dan konten grafis media sosial himpunan.',
            img: 'IMG/Profile/Kelompok/DivisiCreative.webp',
          },
          {
            title: 'Dokumentasi Foto & Video Aftermovie Acara',
            desc: 'Peliputan dokumentasi visual seluruh rangkaian kegiatan internal maupun eksternal HMTT TUJ.',
            img: 'IMG/Acara/Foto Bersama.webp',
          },
        ],
      },
      {
        divisiName: 'Divisi Kewirausahaan',
        kadiv: 'Alex Bima A.',
        items: [
          {
            title: 'Produksi PDH, Lanyard & Merchandise Resmi HMTT',
            desc: 'Pengelolaan atribut identitas resmi himpunan serta pengembangan jiwa wirausaha pengurus.',
            img: 'IMG/Profile/Kelompok/DivisiKWH.webp',
          },
          {
            title: 'Bazaar & Kemitraan Usaha Himpunan',
            desc: 'Kegiatan kemandirian finansial organisasi melalui program dana usaha dan pameran.',
            img: 'IMG/Acara/ExpoBTC.webp',
          },
        ],
      },
    ],
  },
  {
    id: 'humas',
    title: '4. Hubungan Masyarakat (Internal & Eksternal)',
    shortTitle: 'Departemen Hubungan Masyarakat',
    img: 'IMG/Profile/Kelompok/DepHUMAS.webp',
    divisiNaungan: ['Divisi Internal', 'Divisi Eksternal'],
    pimpinan: 'Kadep: M. Jabbar Raafey | Kadiv: Azriel Rabbany & Chandra Yudhistira S.',
    details: [
      {
        name: 'Divisi Internal',
        desc: 'Divisi ini berperan untuk mengikuti kegiatan kampus dan juga menjalin hubungan antar pengurus HMTT dengan seluruh anggota HMTT, dan bertugas untuk membuat acara/kegiatan Have Fun di lingkungan kampus.',
      },
      {
        name: 'Divisi Eksternal',
        desc: 'Divisi yang berperan sebagai wadah untuk pengurus maupun anggota HMTT untuk mengikuti kegiatan atau forum diluar kampus bersama dengan kampus-kampus lain seperti FKHMEI atau yang lain dan juga kerja sama antar kampus lain.',
      },
    ],
    divisionsGallery: [
      {
        divisiName: 'Divisi Internal',
        kadiv: 'Azriel Rabbany.',
        items: [
          {
            title: 'Malam Keakraban (Makrab) HMTT TUJ',
            desc: 'Mempererat rasa kekeluargaan dan solidaritas antar pengurus serta anggota lintas angkatan.',
            img: 'IMG/Acara/Makrab 2025.webp',
          },
          {
            title: 'Halal Bihalal & Silaturahmi Keluarga Besar HMTT',
            desc: 'Kegiatan temu akrab untuk menjaga keharmonisan seluruh elemen mahasiswa Teknik Telekomunikasi.',
            img: 'IMG/Acara/HalalBihalal2024.webp',
          },
          {
            title: 'Sharing Session & Forum Aspirasi Internal',
            desc: 'Ruang diskusi terbuka dan penyerapan aspirasi mahasiswa S1 Teknik Telekomunikasi.',
            img: 'IMG/Acara/SharingSession.webp',
          },
        ],
      },
      {
        divisiName: 'Divisi Eksternal',
        kadiv: 'Chandra Yudhistira S.',
        items: [
          {
            title: 'Studi Banding Antar Himpunan Mahasiswa',
            desc: 'Pertukaran wawasan tata kelola organisasi dan kolaborasi bersama himpunan universitas lain.',
            img: 'IMG/Acara/Studban.webp',
          },
          {
            title: 'Kunjungan Industri & Kemitraan Eksternal',
            desc: 'Membangun jejaring kerja sama dengan instansi luar dan ekosistem industri telekomunikasi.',
            img: 'IMG/Acara/KunjunganEksternal.webp',
          },
          {
            title: 'Delegasi Musyawarah Wilayah & Forum Nasional',
            desc: 'Perwakilan aktif HMTT TUJ dalam forum mahasiswa teknik telekomunikasi tingkat wilayah dan nasional.',
            img: 'IMG/Acara/MuswilEksternal.webp',
          },
        ],
      },
    ],
  },
];

export function ProgramKerjaDetailPage({ deptId, onBack, onSelectDept }) {
  const dept = DIVISI_ITEMS.find((d) => d.id === deptId) || DIVISI_ITEMS[0];

  return (
    <div className="min-h-screen bg-[#080B12] text-white pb-20">
      {/* Header Banner Biru */}
      <section className="bg-[#1E4BBC] py-12 lg:py-16 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Departemen & Divisi</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-black/25 px-3.5 py-1 rounded-full">
                Galeri Program Kerja
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3">
                {dept.shortTitle}
              </h1>
              <p className="text-white/85 text-sm sm:text-base mt-2">{dept.pimpinan}</p>
            </div>

            {/* Navigasi Cepat Antar Departemen */}
            <div className="flex flex-wrap gap-2">
              {DIVISI_ITEMS.map((item) => {
                const isSelected = item.id === dept.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectDept(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                      isSelected
                        ? 'bg-white text-[#1E4BBC] shadow-md'
                        : 'bg-black/25 text-white hover:bg-black/40'
                    }`}
                  >
                    {item.shortTitle.replace('Departemen ', '')}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Program Kerja per Divisi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {dept.divisionsGallery.map((divGroup) => (
          <section key={divGroup.divisiName} className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B8DEF]">
                  Program Kerja Divisi
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {divGroup.divisiName}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Kepala Divisi: <span className="text-white font-semibold">{divGroup.kadiv}</span>
              </p>
            </div>

            <div className="bg-[#0E1320] rounded-2xl border-2 border-dashed border-[#5B8DEF]/50 p-10 sm:p-14 text-center shadow-lg">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed">
                Jujur Bingung buat foto-foto dan Proker divisninya masing-masing pliss tolong listin dong:V
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function DivisiProker({ onOpenProker }) {
  return (
    <div>
      {/* Departemen & Divisi (Background Biru) */}
      <section
        id="ikhtisar-divisi"
        className="bg-[#1E4BBC] text-white py-12 sm:py-16 lg:py-20 transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Departemen & Divisi
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {DIVISI_ITEMS.map((div, idx) => (
              <motion.div
                key={div.title}
                id={`div-${div.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="relative bg-[#0B0F19] rounded-2xl border-2 border-[#5B8DEF] p-5 sm:p-8 lg:p-10 overflow-hidden shadow-2xl scroll-mt-24"
              >
                {/* Watermark Logo di Kiri */}
                <img
                  src="IMG/Logo/logofix.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute -left-16 top-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 object-contain opacity-[0.06] pointer-events-none select-none"
                />

                <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
                  {/* Kolom Informasi (Rata Kanan mengikuti referensi) */}
                  <div className="flex-1 w-full text-left md:text-right">
                    <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                      {div.title}
                    </h3>

                    {/* Bagian 1: Divisi Naungan */}
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs sm:text-sm font-bold text-[#5B8DEF]">
                        Divisi Fungsional
                      </p>
                      <div className="mt-1 space-y-0.5 text-xs sm:text-sm text-slate-200">
                        {div.divisiNaungan.map((namaDivisi) => (
                          <p key={namaDivisi}>{namaDivisi}</p>
                        ))}
                      </div>
                    </div>

                    {/* Bagian 2: Kepemimpinan */}
                    <div className="mt-3.5 pt-3.5 border-t border-white/10">
                      <p className="text-xs sm:text-sm font-bold text-[#5B8DEF]">
                        Struktur Pimpinan
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300">{div.pimpinan}</p>
                    </div>

                    {/* Bagian 3: Detail Departemen & Divisi */}
                    <div className="mt-3.5 pt-3.5 border-t border-white/10">
                      <p className="text-xs sm:text-sm font-bold text-[#5B8DEF]">
                        Detail Departemen & Divisi
                      </p>
                      <div className="mt-2 space-y-3 text-xs sm:text-sm text-slate-300">
                        {div.details.map((detail) => (
                          <div key={detail.name} className="space-y-0.5">
                            <p className="font-bold text-white">{detail.name}</p>
                            <p className="text-slate-300 leading-relaxed">{detail.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Kolom Foto di Kanan + Tombol Program Kerja di Bawah Gambar */}
                  <div className="w-full sm:w-72 md:w-64 lg:w-72 shrink-0 flex flex-col items-center">
                    <div className="w-full aspect-[4/3] md:aspect-square rounded-tl-[44px] rounded-br-[44px] rounded-tr-xl rounded-bl-xl border-4 border-[#5B8DEF]/60 bg-slate-900 overflow-hidden shadow-xl">
                      <img
                        src={div.img}
                        alt={div.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenProker && onOpenProker(div.id)}
                      className="mt-4 w-full bg-[#1E4BBC] hover:bg-[#143896] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl border border-[#5B8DEF]/50 shadow-md shadow-[#1E4BBC]/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Program Kerja</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manfaat Program Kami (Disembunyikan sementara) */}
      <section className="hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center mb-12">
          Manfaat Bergabung di Himpunan
        </h2>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <img
              src="IMG/Acara/Foto Bersama.webp"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80';
              }}
              alt="Tim HMTT"
              className="rounded-2xl shadow-lg border border-slate-200 dark:border-[#1E4BBC]/30 w-full h-auto"
            />
          </div>
          <div className="lg:col-span-6 space-y-5">
            {[
              {
                title: 'Kesiapan Karir sebagai Engineer',
                desc: 'Terbiasa bekerja dalam tim teknis, mengelola proyek teknologi, dan berbicara di depan publik.',
              },
              {
                title: 'Sertifikat Kepengurusan Resmi',
                desc: 'Mendapatkan SK dan sertifikat resmi yang diakui oleh Program Studi dan Kemahasiswaan Telkom University Jakarta.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#1E4BBC] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{benefit.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
