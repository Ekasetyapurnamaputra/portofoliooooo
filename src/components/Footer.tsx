import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-amber-100/80 bg-white/70 py-8 text-center text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-zinc-600">
          Didesain & Dikembangkan oleh {portfolioData.profile.fullName} • SMK PGRI 2 Ponorogo
        </p>

        <div className="flex items-center gap-4">
          <p>© {new Date().getFullYear()} Semua Hak Cipta Dilindungi.</p>
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-8 h-8 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
