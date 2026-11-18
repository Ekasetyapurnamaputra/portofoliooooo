import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import Magnet from './react-bits/Magnet';

interface NavbarProps {
  onOpenCVModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Pendidikan & Magang', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-extrabold text-2xl tracking-wider text-zinc-900 group-hover:text-amber-600 transition-colors">
            EKA SETYA
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform animate-pulse" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-amber-600 transition-colors py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button with Magnet */}
        <div className="hidden md:block">
          <Magnet magnetStrength={3} padding={30}>
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide text-zinc-900 bg-amber-400 hover:bg-amber-500 shadow-sm shadow-amber-300/40 hover:shadow-md hover:shadow-amber-400/30 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-zinc-900" />
              <span>Unduh CV</span>
            </button>
          </Magnet>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-700 hover:bg-amber-100 transition-colors"
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-amber-100 px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-700 font-semibold py-2 border-b border-zinc-100 hover:text-amber-600"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenCVModal) onOpenCVModal();
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-zinc-900 bg-amber-400 hover:bg-amber-500 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Unduh CV</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
