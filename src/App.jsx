import React, { useState, useEffect } from 'react';
import Navbar, { NAV_ITEMS } from './components/Navbar';
import Footer from './components/Footer';
import Beranda, { BottomShowcase } from './pages/Beranda';
import BadanPengurusHarian from './pages/BadanPengurusHarian';
import DivisiProker, { ProgramKerjaDetailPage } from './pages/DivisiProker';
import Regenerasi from './pages/Regenerasi';
import MusyawarahBesar from './pages/MusyawarahBesar';

export default function App() {
  const [activePage, setActivePage] = useState('beranda');
  const [activeProkerDept, setActiveProkerDept] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const currentNav = NAV_ITEMS.find((item) => item.id === activePage);
    document.title = `HMTT-TUJ - ${currentNav ? currentNav.label : 'Beranda'}`;
  }, [activePage]);

  // Scroll Spy: otomatis pindahkan indikator aktif di Navbar saat di-scroll ke bawah/atas
  useEffect(() => {
    if (activeProkerDept) return;

    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = 'beranda';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          currentSection = id;
        }
      }

      setActivePage((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [activeProkerDept]);

  const scrollToTarget = (pageId, targetHash = '') => {
    const navbarOffset = 80;

    if (targetHash) {
      const hashEl = document.getElementById(targetHash);
      if (hashEl && hashEl.offsetParent !== null) {
        const top = hashEl.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }

    if (pageId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionEl = document.getElementById(pageId);
    if (sectionEl) {
      const top = sectionEl.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavigate = (pageId, targetHash = '') => {
    setActivePage(pageId);

    if (activeProkerDept) {
      setActiveProkerDept(null);
      setTimeout(() => {
        scrollToTarget(pageId, targetHash);
      }, 60);
      return;
    }

    scrollToTarget(pageId, targetHash);
  };

  const handleOpenProker = (deptId) => {
    setActiveProkerDept(deptId);
    setActivePage('program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProker = () => {
    const prevDept = activeProkerDept;
    setActiveProkerDept(null);
    setActivePage('program');
    setTimeout(() => {
      const deptCard = prevDept ? document.getElementById(`div-${prevDept}`) : null;
      const targetEl = deptCard || document.getElementById('program');
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080B12] text-white font-sans antialiased selection:bg-[#1E4BBC] selection:text-white">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activeProkerDept ? (
          <ProgramKerjaDetailPage
            deptId={activeProkerDept}
            onBack={handleCloseProker}
            onSelectDept={(id) => {
              setActiveProkerDept(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            <div id="beranda" className="scroll-mt-20">
              <Beranda onNavigate={handleNavigate} />
            </div>

            <div id="bph" className="relative z-20 bg-[#080B12] scroll-mt-20">
              <BadanPengurusHarian onNavigate={handleNavigate} />
            </div>

            <div id="program" className="relative z-20 bg-[#080B12] scroll-mt-20">
              <DivisiProker onNavigate={handleNavigate} onOpenProker={handleOpenProker} />
            </div>

            <div id="mubes" className="relative z-20 bg-[#080B12] scroll-mt-20">
              <MusyawarahBesar onNavigate={handleNavigate} />
            </div>

            <div id="regenerasi" className="relative z-20 bg-[#080B12] scroll-mt-20">
              <Regenerasi onNavigate={handleNavigate} />
            </div>

            <BottomShowcase onNavigate={handleNavigate} />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
