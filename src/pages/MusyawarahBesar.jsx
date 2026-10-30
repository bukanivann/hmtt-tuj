import React from 'react';
import { motion } from 'framer-motion';

export default function MusyawarahBesar() {
  return (
    <div>
      {/* Hero Musyawarah Besar AD&ART */}
      <section className="bg-[#080B12] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-[#1E4BBC]/25 border border-[#1E4BBC]/50 text-[#5B8DEF] px-3.5 py-1.5 rounded-full">
              Forum Konstitusi Musyawarah Besar
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Musyawarah Besar AD&ART HMTT-TUJ
            </h1>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Musyawarah Besar (MUBES) merupakan forum pengambilan keputusan tertinggi di Himpunan
              Mahasiswa Teknik Telekomunikasi Telkom University Jakarta untuk menetapkan Anggaran
              Dasar & Anggaran Rumah Tangga (AD&ART).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#1E4BBC]/40 bg-black aspect-[16/10] relative">
              <img
                src="IMG/Acara/MubesAD-ART.webp"
                alt="Musyawarah Besar AD&ART HMTT-TUJ"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-3.5 sm:p-5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#1E4BBC] px-2.5 py-1 rounded text-white">
                  Sidang Konstitusi
                </span>
                <p className="font-bold text-white text-xs sm:text-base lg:text-lg mt-1.5 leading-snug">
                  Pelaksanaan Musyawarah Besar & Pembahasan AD&ART HMTT TUJ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dokumentasi MUBES & Rapat Evaluasi Triwulan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-[#1E4BBC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-white shadow-xl">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold bg-black/25 px-3 py-1 rounded-full mb-3">
              Dokumentasi Persidangan & Evaluasi Berkala
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug">
              Rapat Evaluasi Triwulan & Musyawarah Mahasiswa
            </h3>
            <p className="text-white/85 text-xs sm:text-sm mt-2 leading-relaxed">
              Selain Musyawarah Besar di akhir periode, HMTT TUJ secara konsisten melaksanakan
              Evaluasi Triwulan setiap 3 bulan sekali untuk memantau progres program kerja tiap
              departemen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                img: 'IMG/Acara/MubesAD-ART.webp',
                title: 'Musyawarah Besar Pembahasan AD&ART',
                tag: 'MUBES HMTT TUJ',
              },
              {
                img: 'IMG/Acara/Triwulan1.webp',
                title: 'Sidang Pleno & Evaluasi Proker Triwulan',
                tag: 'Evaluasi Triwulan',
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="rounded-2xl overflow-hidden bg-black border border-white/20"
              >
                <div className="w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-black/60 backdrop-blur-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                    {doc.tag}
                  </span>
                  <h4 className="font-bold text-sm text-white mt-1">{doc.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
