import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  ClipboardCheck,
  MessagesSquare,
  PartyPopper,
  CheckCircle,
  ChevronDown,
  Send,
} from 'lucide-react';

const FAQS = [
  {
    q: 'Kapan jadwal Regenerasi pengurus baru HMTT dibuka?',
    a: 'Pendaftaran dibuka sesuai timeline Panitia Regenerasi pada awal pergantian periode kabinet. Pastikan memantau Instagram resmi HMTT TUJ dan grup angkatan.',
  },
  {
    q: 'Apakah harus jago ngoding atau jaringan dulu baru bisa daftar Keilmuan/Ristek?',
    a: 'Tidak harus! Yang terpenting adalah antusiasme dan kemauan belajar. Di dalam HMTT kita akan belajar bareng lewat sesi mentoring dan upgrading.',
  },
  {
    q: 'Apakah kegiatan himpunan akan mengganggu jadwal kuliah dan praktikum?',
    a: 'Jadwal rapat dan proker selalu menyesuaikan kalender akademik kampus (di luar jam kuliah utama) dan sangat mendukung kelancaran akademik pengurus.',
  },
];

export default function Regenerasi() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero Regenerasi */}
      <section className="bg-[#1E4BBC] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black/25 px-3.5 py-1 rounded-full">
              Regenerasi HMTT-TUJ
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Mulai Perjalanan Kepemimpinan Anda Hari Ini
            </h1>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Bergabunglah bersama barisan pengurus baru Himpunan Mahasiswa Teknik Telekomunikasi
              Telkom University Jakarta. Asah kemampuan teknis, kepemimpinan, dan perluas relasimu
              sekarang.
            </p>
            <a
              href="#form-oprec"
              className="hidden bg-black hover:bg-neutral-900 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg transition-all"
            >
              Isi Formulir Sekarang
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <img
              src="IMG/Acara/FotoBersamaLDKM.webp"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80';
              }}
              alt="Kaderisasi & Regenerasi HMTT TUJ"
              className="rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/20 w-full object-cover aspect-[16/10]"
            />
          </motion.div>
        </div>
      </section>

      {/* 4 Step Proses Penerimaan (Disembunyikan sementara) */}
      <section className="hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Proses Seleksi & Regenerasi Kami
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
            Alur seleksi dirancang transparan dan suportif untuk menempatkan kamu di divisi yang
            paling tepat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 'Tahap 1',
              icon: FileText,
              title: 'Kirim Pendaftaran',
              desc: 'Lengkapi formulir online di bawah beserta pilihan divisi dan motivasi bergabung.',
            },
            {
              step: 'Tahap 2',
              icon: ClipboardCheck,
              title: 'Seleksi Berkas & Studi Kasus',
              desc: 'Penilaian CV/portofolio singkat atau tugas mini sesuai divisi yang dipilih.',
            },
            {
              step: 'Tahap 3',
              icon: MessagesSquare,
              title: 'Wawancara (Screening)',
              desc: 'Sesi bincang santai bersama Panitia Regenerasi untuk mengenal komitmen & minatmu.',
            },
            {
              step: 'Tahap 4',
              icon: PartyPopper,
              title: 'Pengumuman & Pelantikan',
              desc: 'Selamat bergabung! Pengurus terpilih akan mengikuti First Gathering & Upgrading.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#0E1320] p-6 rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 text-center shadow-sm hover:border-[#1E4BBC] hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold text-white bg-[#1E4BBC] px-3 py-1 rounded-full">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#1E4BBC] text-white flex items-center justify-center mx-auto my-4 shadow-md shadow-[#1E4BBC]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Persyaratan Penerimaan (Disembunyikan sementara) */}
      <section className="hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center mb-10">
          Persyaratan Pendaftaran
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#0E1320] p-7 rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 shadow-sm">
            <h3 className="font-bold text-lg text-[#1E4BBC] dark:text-[#5B8DEF] mb-4">
              Persyaratan Umum
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {[
                'Mahasiswa aktif S1 Teknik Telekomunikasi TUJ',
                'Berkomitmen mengikuti satu periode kepengurusan',
                'Memiliki kemauan belajar dan bekerja dalam tim',
                'Mengisi formulir pendaftaran tepat waktu',
              ].map((req) => (
                <li key={req} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#1E4BBC] dark:text-[#5B8DEF] shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#0E1320] p-7 rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 shadow-sm">
            <h3 className="font-bold text-lg text-[#1E4BBC] dark:text-[#5B8DEF] mb-4">
              Nilai Tambah (Opsional)
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {[
                'Minat di bidang Jaringan, IoT, atau Desain/Media',
                'Pengalaman kepanitiaan kampus/sekolah sebelumnya',
                'Kemampuan komunikasi dan manajemen waktu yang baik',
                'Portofolio proyek/desain (khusus Keilmuan & Medkom)',
              ].map((req) => (
                <li key={req} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#1E4BBC] dark:text-[#5B8DEF] shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Disembunyikan sementara) */}
      <section className="hidden max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center mb-10">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>
        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="bg-white dark:bg-[#0E1320] rounded-2xl border border-slate-200 dark:border-[#1E4BBC]/30 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between hover:text-[#1E4BBC] dark:hover:text-[#5B8DEF] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1E4BBC] dark:text-[#5B8DEF]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form Pendaftaran / Hubungi Kami (Disembunyikan sementara) */}
      <section id="form-oprec" className="hidden max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-[#0E1320] p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-[#1E4BBC]/40 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Formulir Regenerasi & Hubungi Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Isi formulir di bawah ini dan Panitia Regenerasi Himpunan Mahasiswa Teknik
              Telekomunikasi akan segera menghubungi Anda.
            </p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-2xl bg-[#1E4BBC]/15 border border-[#1E4BBC] text-[#1E4BBC] dark:text-white text-sm font-medium text-center"
            >
              Terima kasih! Data pendaftaran kamu ke Himpunan Mahasiswa Teknik Telekomunikasi Telkom
              University Jakarta berhasil dikirim.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ivan Saleh Guswanto"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Mahasiswa / Aktif
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@student.telkomuniversity.ac.id"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812xxxxxxxx"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pilih Divisi Tujuan
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
                >
                  <option value="">-- Pilih Divisi --</option>
                  <option value="Akademik">Keilmuan - Akademik & Non-Akademik</option>
                  <option value="PSDM">Pengembangan Mahasiswa - PSDM & Minat Bakat</option>
                  <option value="Kewirausahaan">Pengembangan Mahasiswa - Kewirausahaan</option>
                  <option value="Medkom">Media & Komunikasi (Media & Creative)</option>
                  <option value="Humas">Hubungan Masyarakat (Internal & Eksternal)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Angkatan
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
              >
                <option value="2024">Angkatan 2024</option>
                <option value="2025">Angkatan 2025</option>
                <option value="2026">Angkatan 2026</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Alasan & Motivasi Bergabung dengan HMTT TUJ
              </label>
              <textarea
                rows="4"
                required
                placeholder="Ceritakan singkat tentang diri Anda, minat keahlian, dan motivasi bergabung..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#141B2D] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4BBC]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-[#1E4BBC] hover:bg-[#143896] text-white font-bold py-3.5 rounded-xl shadow-md shadow-[#1E4BBC]/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pendaftaran</span>
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}
