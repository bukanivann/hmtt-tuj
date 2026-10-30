import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'bph', label: 'Badan Pengurus Harian' },
  { id: 'program', label: 'Departemen & Divisi' },
  { id: 'mubes', label: 'Musyawarah Besar' },
  { id: 'regenerasi', label: 'Regenerasi' },
];

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, hash = '') => {
    onNavigate(pageId, hash);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B12]/95 backdrop-blur-md border-b border-[#1E4BBC]/30 shadow-md shadow-[#1E4BBC]/10'
          : 'bg-[#080B12]/95 backdrop-blur-sm border-b border-white/10 shadow-sm'
      }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1E4BBC] via-[#5B8DEF] to-[#1E4BBC] origin-left z-50"
      />
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 h-20 flex items-center justify-between gap-3 sm:gap-6 xl:gap-12">
        {/* Brand / Logo (Pushed to Left) */}
        <motion.button
          type="button"
          onClick={() => handleNavClick('beranda')}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer group shrink min-w-0 mr-auto"
        >
          <div className="relative shrink-0">
            <img
              src="IMG/Logo/logofix.webp"
              alt="Logo Himpunan Mahasiswa Teknik Telekomunikasi"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full transition-all"
            />
          </div>
          <div className="min-w-0">
            <span className="font-extrabold text-xs sm:text-sm md:text-[15px] 2xl:text-base tracking-tight text-white group-hover:text-[#5B8DEF] transition-colors block leading-snug truncate sm:whitespace-normal">
              Himpunan Mahasiswa Teknik Telekomunikasi
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium block mt-0.5 truncate">
              Telkom University Jakarta
            </span>
          </div>
        </motion.button>

        {/* Navigation Links + CTA Button Grouped on the Right */}
        <div className="hidden lg:flex items-center justify-end ml-auto gap-5 xl:gap-7">
          <nav className="flex items-center gap-4 xl:gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'text-[#5B8DEF]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavbarUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E4BBC] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-5 w-px bg-white/15" />

          {/* Right Action Button */}
          <motion.button
            type="button"
            onClick={() => handleNavClick('regenerasi', 'form-oprec')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#1E4BBC] hover:bg-[#143896] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-[#1E4BBC]/30 hover:shadow-lg hover:shadow-[#1E4BBC]/40 transition-all inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Hubungi Kami</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Buka Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#0B0F19] border-b border-white/10 shadow-lg"
          >
            <div className="px-4 pt-2 pb-5 space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#1E4BBC]/30 border-l-4 border-[#1E4BBC]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleNavClick('regenerasi', 'form-oprec')}
                  className="w-full bg-[#1E4BBC] hover:bg-[#143896] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md shadow-[#1E4BBC]/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Hubungi Kami</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
