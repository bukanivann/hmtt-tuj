import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const BPH_INTI = [
  {
    role: 'Pembina Himpunan',
    subtitle: 'Aisyah Novfitri, S.T., M.T.',
    img: 'IMG/Profile/individu/Pembina2.webp',
    badge: 'Pembina 2',
  },
  {
    role: 'Ketua Himpunan',
    subtitle: 'Husni Akmal Khoirullah.',
    img: 'IMG/Profile/individu/Kahim1.webp',
    badge: 'Ketua Himpunan',
    objectPosition: 'center 28%',
  },
  {
    role: 'Wakil Ketua Himpunan',
    subtitle: 'M. Evan Yusaputra.',
    img: 'IMG/Profile/individu/Wakahim1.webp',
    badge: 'Wakil Ketua Himpunan',
    objectPosition: 'center 28%',
  },
  {
    role: 'Sekretaris 1',
    subtitle: 'Salwa Khamila E.',
    img: 'IMG/Profile/individu/Sekre1.webp',
    badge: 'Sekretaris 1',
  },
  {
    role: 'Sekretaris 2',
    subtitle: 'Balqis Safira P.',
    img: 'IMG/Profile/individu/Sekre2.webp',
    badge: 'Sekretaris 2',
  },
  {
    role: 'Bendahara 1',
    subtitle: 'Desi Natalia G.',
    img: 'IMG/Profile/individu/Bendahara1.webp',
    badge: 'Bendahara 1',
  },
  {
    role: 'Bendahara 2',
    subtitle: 'Alya Putri Z.',
    img: 'IMG/Profile/individu/Bendahara2.webp',
    badge: 'Bendahara 2',
  },
];

const KADEP_LIST = [
  {
    role: 'Kepala Departemen Keilmuan',
    subtitle: 'Naufal Rafif.',
    img: 'IMG/Profile/individu/KadepKEILMUAN.webp',
    badge: 'Departemen Keilmuan',
    objectPosition: 'center 18%',
  },
  {
    role: 'Kepala Departemen PM',
    subtitle: 'Ravanata Adha.',
    img: 'IMG/Profile/individu/KadepPM.webp',
    badge: 'Departemen PM',
  },
  {
    role: 'Kepala Departemen HUMAS',
    subtitle: 'M. Jabbar Raafey.',
    img: 'IMG/Profile/individu/KadepHUMAS.webp',
    badge: 'Departemen HUMAS',
  },
  {
    role: 'Kepala Departemen MEDKOM',
    subtitle: 'Jessica Indaref.',
    img: 'IMG/Profile/individu/KadepMEDKOM.webp',
    badge: 'Departemen MEDKOM',
  },
];

const KADIV_LIST = [
  {
    role: 'Kepala Divisi Akademik',
    subtitle: 'M. Ridho Hibatullah.',
    img: 'IMG/Profile/individu/KadivAKADEMIK.webp',
    badge: 'Divisi Akademik',
  },
  {
    role: 'Kepala Divisi Non-Akademik',
    subtitle: 'Roby Syawal F.',
    img: 'IMG/Profile/individu/KadivNONAKA.webp',
    badge: 'Divisi Non-Akademik',
  },
  {
    role: 'Kepala Divisi PSDM',
    subtitle: 'Dian Wahyuningsih.',
    img: 'IMG/Profile/individu/KadivPSDM.webp',
    badge: 'Divisi PSDM',
  },
  {
    role: 'Kepala Divisi Minat & Bakat',
    subtitle: 'M. Daffa Tajriansyah.',
    img: 'IMG/Profile/individu/KadivMIMBAK.webp',
    badge: 'Divisi Minat & Bakat',
  },
  {
    role: 'Kepala Divisi Internal',
    subtitle: 'Azriel Rabbany.',
    img: 'IMG/Profile/individu/KadivINTERNAL.webp',
    badge: 'Divisi Internal',
  },
  {
    role: 'Kepala Divisi Eksternal',
    subtitle: 'Chandra Yudhistira S.',
    img: 'IMG/Profile/individu/KadivEKSTERNAL.webp',
    badge: 'Divisi Eksternal',
  },
  {
    role: 'Kepala Divisi Media',
    subtitle: 'Marsell Anraymond P.',
    img: 'IMG/Profile/individu/KadivMEDIA.webp',
    badge: 'Divisi Media',
  },
  {
    role: 'Kepala Divisi Creative',
    subtitle: 'Nona Sabrina.',
    img: 'IMG/Profile/individu/KadivCREATIVE.webp',
    badge: 'Divisi Creative',
  },
  {
    role: 'Kepala Divisi Kewirausahaan',
    subtitle: 'Alex Bima A.',
    img: 'IMG/Profile/individu/KadivKWH.webp',
    badge: 'Divisi Kewirausahaan',
  },
];

export default function BadanPengurusHarian() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero BPH */}
      <section className="relative bg-[#1E4BBC] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Watermark Logo Terpotong di Sebelah Kiri */}
        <img
          src="IMG/Logo/logofix.webp"
          alt=""
          aria-hidden="true"
          className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain opacity-[0.08] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-black/25 px-3.5 py-1.5 rounded-full">
              <Users className="w-3.5 h-3.5" /> Struktur Kepengurusan
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Badan Pengurus Harian HMTT TUJ
            </h1>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Mengenal lebih dekat jajaran Dewan Inti, Kepala Departemen, dan Kepala Divisi Himpunan
              Mahasiswa Teknik Telekomunikasi Telkom University Jakarta.
            </p>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 sm:pt-3">
              <div className="bg-black/25 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-extrabold">7</p>
                <p className="text-[11px] sm:text-xs text-white/80 leading-snug mt-0.5">
                  Pembina & BPH Inti
                </p>
              </div>
              <div className="bg-black/25 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-extrabold">4</p>
                <p className="text-[11px] sm:text-xs text-white/80 leading-snug mt-0.5">
                  Kepala Departemen
                </p>
              </div>
              <div className="bg-black/25 rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-extrabold">9</p>
                <p className="text-[11px] sm:text-xs text-white/80 leading-snug mt-0.5">
                  Kepala Divisi
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 bg-black aspect-[16/10] relative">
              <img
                src="IMG/Profile/Kelompok/DewanINTI.webp"
                onError={(e) => {
                  e.currentTarget.src = 'IMG/Profile/Kelompok/FotoBPH1.webp';
                }}
                alt="Badan Pengurus Harian HMTT TUJ"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3.5 sm:p-5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#1E4BBC] px-2.5 py-1 rounded text-white">
                  Jajaran Kepemimpinan
                </span>
                <p className="font-bold text-white text-xs sm:text-base lg:text-lg mt-1.5 leading-snug">
                  Dewan Inti Himpunan Mahasiswa Teknik Telekomunikasi Telkom University Jakarta.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Header BPH */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-4 sm:pb-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-5 sm:pb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Badan Pengurus Harian HMTT TUJ
          </h2>
        </div>
      </section>

      {/* Section 1: Pembina & Dewan Inti */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            Pembina & Dewan Inti
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {BPH_INTI.map((person) => (
            <div
              key={person.role}
              className="bg-white dark:bg-[#0E1320] rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 overflow-hidden shadow-sm"
            >
              <div className="relative h-72 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.role}
                  loading="lazy"
                  decoding="async"
                  style={person.objectPosition ? { objectPosition: person.objectPosition } : undefined}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold bg-[#1E4BBC] text-white px-3 py-1 rounded-full shadow">
                  {person.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {person.role}
                </h4>
                <p className="text-xs text-[#1E4BBC] dark:text-[#5B8DEF] font-semibold mt-1">
                  {person.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Kepala Departemen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            Jajaran Kepala Departemen
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {KADEP_LIST.map((person) => (
            <div
              key={person.role}
              className="bg-white dark:bg-[#0E1320] rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 overflow-hidden shadow-sm"
            >
              <div className="relative h-72 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.role}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: person.objectPosition || 'center 30%' }}
                  className="w-full h-full object-cover object-[center_30%]"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold bg-[#1E4BBC] text-white px-3 py-1 rounded-full shadow">
                  {person.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {person.role}
                </h4>
                <p className="text-xs text-[#1E4BBC] dark:text-[#5B8DEF] font-semibold mt-1">
                  {person.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Kepala Divisi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-14 sm:pb-16">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            Jajaran Kepala Divisi
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {KADIV_LIST.map((person) => (
            <div
              key={person.role}
              className="bg-white dark:bg-[#0E1320] rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 overflow-hidden shadow-sm"
            >
              <div className="relative h-72 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.role}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: person.objectPosition || 'center 30%' }}
                  className="w-full h-full object-cover object-[center_30%]"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold bg-[#1E4BBC] text-white px-3 py-1 rounded-full shadow">
                  {person.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {person.role}
                </h4>
                <p className="text-xs text-[#1E4BBC] dark:text-[#5B8DEF] font-semibold mt-1">
                  {person.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
