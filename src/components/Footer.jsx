import React from 'react';
import { NAV_ITEMS } from './Navbar';

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative z-20 bg-[#080B12] border-t border-[#1E4BBC]/30 text-white pt-14 pb-8 overflow-hidden">
      {/* Watermark Logo di Sebelah Kanan */}
      <img
        src="IMG/Logo/logofix.webp"
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 object-contain opacity-[0.06] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3.5">
              <img
                src="IMG/Logo/logofix.webp"
                alt="Logo Himpunan Mahasiswa Teknik Telekomunikasi"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shrink-0"
              />
              <div>
                <span className="font-bold text-base sm:text-lg block leading-tight text-white">
                  Himpunan Mahasiswa Teknik Telekomunikasi
                </span>
                <span className="text-xs text-[#5B8DEF] font-medium">
                  Telkom University Jakarta
                </span>
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm pt-1">
              Jl. Daan Mogot No.KM. 11 1, RT.12/RW.4, Kedaung Kali Angke, Kecamatan Cengkareng,
              Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11710
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-[#5B8DEF]">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs text-white/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-[#5B8DEF]">Kontak</h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hmtt.tukj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Gmail: hmtt.tukj@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hmtt_tuj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Instagram: @hmtt_tuj
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © 2026 Himpunan Mahasiswa Teknik Telekomunikasi - Telkom University Jakarta. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
