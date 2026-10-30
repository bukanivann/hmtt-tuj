import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';

const VIDEO_SETS = [
  [
    {
      img: 'IMG/Acara/Foto Bersama.webp',
      badge: 'Company Profile',
      title: 'Aftermovie Pengenalan Kehidupan Kampus & Himpunan',
    },
    {
      img: 'IMG/Acara/WorkshopIOT.webp',
      badge: 'Workshop & Lab',
      title: 'Hands-on Network Infrastructure & IoT Prototyping',
    },
  ],
  [
    {
      img: 'IMG/Acara/SeminarElektroEksternal.webp',
      badge: 'Seminar Nasional',
      title: 'Seminar Nasional Telekomunikasi & Kunjungan Industri',
    },
    {
      img: 'IMG/Acara/Makrab 2025.webp',
      badge: 'Kaderisasi',
      title: 'Kaderisasi, Malam Keakraban & Regenerasi Pengurus HMTT',
    },
  ],
];

const TESTIMONIALS = [
  {
    initials: 'IS',
    color: 'bg-[#1E4BBC] text-white',
    name: 'Ivan Saleh G.',
    role: 'Pengurus & Mahasiswa Aktif 2024',
    quote:
      'Lewat HMTT, gua gak cuma belajar teori di kelas, tapi juga dapet kesempatan ngisi workshop jaringan OSPF dan bangun proyek IoT bareng temen-temen sefrekuensi.',
  },
  {
    initials: 'RA',
    color: 'bg-[#1E4BBC]/90 text-white',
    name: 'Rizky Aditya',
    role: 'Anggota Divisi Keilmuan & Akademik',
    quote:
      'Program study club dan responsi dari divisi Keilmuan ngebantu banget waktu persiapan ujian praktikum dan sertifikasi jaringan Cisco.',
  },
  {
    initials: 'NP',
    color: 'bg-[#1E4BBC] text-white',
    name: 'Nadia Putri',
    role: 'Alumni Teknik Telekomunikasi',
    quote:
      'Pengalaman manajemen event dan relasi antar himpunan di HMTT TUJ jadi bekal berharga banget pas gua masuk ke dunia kerja di industri telekomunikasi.',
  },
  {
    initials: 'MK',
    color: 'bg-[#1E4BBC]/90 text-white',
    name: 'Malik & Rooben',
    role: 'Tim Kewirausahaan & Kolaborator',
    quote:
      'Lingkungan di HMTT suportif banget. Kita didorong buat eksplor hal baru mulai dari desain web himpunan, riset roket telemetri, sampai wirausaha mahasiswa.',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#1E4BBC] to-transparent origin-center"
    />
  );
}

export function BottomShowcase() {
  const [videoPage, setVideoPage] = useState(0);

  const slideVideo = (dir) => {
    setVideoPage((prev) => (prev + dir + VIDEO_SETS.length) % VIDEO_SETS.length);
  };

  return (
    <div className="hidden relative z-20 bg-[#06090F] overflow-hidden">
      <SectionDivider />

      {/* ================= VIDEO / DOKUMENTASI SLIDER (DISEMBUNYIKAN SEMENTARA) ================= */}
      <section className="bg-[#0F1523] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                Temukan Video Profil & Dokumentasi Kegiatan HMTT
              </h2>
              <p className="text-slate-300 mt-2 text-sm">
                Sorotan keseruan acara, seminar nasional, kaderisasi, dan kegiatan laboratorium kami.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => slideVideo(-1)}
                aria-label="Video Sebelumnya"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => slideVideo(1)}
                aria-label="Video Selanjutnya"
                className="w-10 h-10 rounded-full bg-[#1E4BBC] text-white flex items-center justify-center hover:bg-[#143896] shadow transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VIDEO_SETS[videoPage].map((vid) => (
              <motion.div
                key={vid.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-[#1E4BBC]/30 aspect-video bg-black cursor-pointer"
              >
                <img
                  src={vid.img}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E4BBC] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-black/90 text-white">
                  <span className="text-xs font-semibold bg-[#1E4BBC] px-2.5 py-0.5 rounded">
                    {vid.badge}
                  </span>
                  <h4 className="font-bold text-lg mt-1">{vid.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Beranda() {
  const { scrollY } = useScroll();
  const heroTextOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const heroTextY = useTransform(scrollY, [0, 380], [0, 90]);
  const heroTextScale = useTransform(scrollY, [0, 380], [1, 0.94]);

  return (
    <div className="relative">
      {/* ================= HERO SECTION (STICKY / DIAM SAAT DI-SCROLL) ================= */}
      <section className="sticky top-20 z-0 w-full h-[calc(100dvh-5rem)] min-h-[460px] sm:min-h-[540px] flex items-center justify-center overflow-hidden bg-black">
        {/* Stationary Background Image BPH3.JPG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('IMG/Profile/Kelompok/BPH3.webp')" }}
          aria-hidden="true"
        />
        {/* Subtle Darkened Overlay agar gambar tetap jelas terlihat tetapi tidak terlalu terang */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65"
          aria-hidden="true"
        />

        {/* Centered Semi-Transparent Hero Text yang memudar & tertutup saat di-scroll ke bawah */}
        <motion.div
          style={{
            opacity: heroTextOpacity,
            y: heroTextY,
            scale: heroTextScale,
          }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center select-none pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center"
          >
            <h1
              className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white/65 tracking-tight leading-tight"
              style={{
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.45)',
              }}
            >
              Himpunan Teknik Telekomunikasi
            </h1>
            <span
              className="mt-2 sm:mt-3 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E4BBC]/80 uppercase tracking-wider"
              style={{
                textShadow: '0 2px 18px rgba(255, 255, 255, 0.35), 0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              TELKOM UNIVERSITY JAKARTA
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= KONTEN BAWAH YANG MENUTUPI HERO SAAT DI-SCROLL ================= */}
      <div className="relative z-20 bg-[#06090F] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Top Animated Scroll Marker Line */}
        <SectionDivider />

        {/* ================= 1. TENTANG KAMI & VISI MISI (DIGABUNG - BACKGROUND HITAM PEKAT) ================= */}
        <section id="tentang-kami" className="py-16 lg:py-24 bg-[#06090F] relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Bagian Tentang Kami */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Tentang <span className="text-[#1E4BBC]">Kami</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-20 h-1 bg-[#1E4BBC] rounded-full mx-auto mt-3 origin-center"
                />
              </motion.div>

              <motion.p
                variants={fadeUpVariant}
                className="text-base sm:text-lg font-medium text-white leading-relaxed pt-2"
              >
                Himpunan Mahasiswa Teknik Telekomunikasi Telkom University Jakarta dideklarasi pada
                Tanggal 12 Desember 2023.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-base sm:text-lg font-semibold text-[#5B8DEF]"
              >
                Himpunan Mahasiswa Teknik Telekomunikasi Telkom University Jakarta bertujuan:
              </motion.p>

              <motion.ol
                variants={staggerContainer}
                className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto text-left list-none pl-4 border-l-2 border-[#1E4BBC]/60"
              >
                {[
                  'Menjadi wadah bagi mahasiswa Teknik Telekomunikasi Telkom University Jakarta untuk mengembangkan karakter mahasiswa yang merupakan insan akademis.',
                  'Menjadi wadah pengembangan potensi diri dalam berorganisasi bagi seluruh mahasiswa S1 Teknik Telekomunikasi.',
                  'Menciptakan dan meningkatkan rasa kekeluargaan antar pengurus dan anggota HMTT-TUJ.',
                  'Memfasilitasi anggota HMTT-TUJ dalam pengembangan dan aktualisasi diri menuju manusia madani yang kompeten.',
                ].map((goal, idx) => (
                  <motion.li
                    key={goal}
                    variants={fadeUpVariant}
                    className="flex items-start gap-2.5"
                  >
                    <span className="font-semibold text-[#5B8DEF] shrink-0 w-5">{idx + 1}.</span>
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>

            {/* Bagian Visi & Misi */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="space-y-12"
            >
              <motion.div variants={fadeUpVariant} className="text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Visi & <span className="text-[#1E4BBC]">Misi</span>
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-20 h-1 bg-[#1E4BBC] rounded-full mx-auto mt-3 origin-center"
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Kiri: Visi */}
                <motion.div variants={fadeUpVariant} className="space-y-4 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E4BBC]">Visi</h3>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed pl-4 border-l-2 border-[#1E4BBC]/60">
                    Mewujudkan HMTT-TUJ sebagai organisasi yang kreatif, inovatif, serta menjunjung
                    tinggi swadisplin dan demokratis.
                  </p>
                </motion.div>

                {/* Kanan: Misi */}
                <motion.div variants={fadeUpVariant} className="space-y-4 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E4BBC]">Misi</h3>
                  <ol className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed text-left list-none pl-4 border-l-2 border-[#1E4BBC]/60">
                    {[
                      'Menjadikan HMTT TUJ sebagai wadah bagi mahasiswa untuk menyalurkan kreatifitas dan inovasi melalui berbagai kegiatan baik internal maupun eksternal.',
                      'Mengembangkan HMTT TUJ sebagai organisasi yang baik dengan nilai kekeluargaan untuk mencapai himpunan yang harmonis dan berkualitas.',
                      'Mengoptimalkan HMTT TUJ sebagai wadah dalam menampung aspirasi seluruh pengurus himpunan dan mahasiswa S1 Teknik Telekomunikasi.',
                    ].map((misi, idx) => (
                      <li key={misi} className="flex items-start gap-2.5">
                        <span className="font-semibold text-[#5B8DEF] shrink-0 w-5">
                          {idx + 1}.
                        </span>
                        <span>{misi}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />
      </div>
    </div>
  );
}
