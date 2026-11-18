import React, { useState } from 'react';
import { Mail, Github, Send, CheckCircle, Copy, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Magnet from './react-bits/Magnet';

export const ContactCTA: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setShowModal(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Banner Container */}
        <div className="relative rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-100/90 via-amber-50/70 to-amber-100/90 p-8 sm:p-12 shadow-sm overflow-hidden">
          
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-300/20 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Mari Bekerja <span className="text-amber-600">Sama</span>
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Saya selalu terbuka untuk proyek baru, tawaran kerja, dan kolaborasi pengembangan aplikasi web. Jangan ragu untuk mendiskusikan peluang bersama saya!
              </p>
              
              {/* Quick email display with copy feedback */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-zinc-700 bg-white/80 px-3 py-1.5 rounded-lg border border-amber-200">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 bg-amber-200/60 hover:bg-amber-200 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Buttons (LinkedIn removed, GitHub added) */}
            <div className="flex flex-wrap items-center gap-4">
              <Magnet magnetStrength={3} padding={20}>
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-zinc-950 bg-amber-400 hover:bg-amber-500 shadow-md shadow-amber-300/40 transition-all hover:translate-y-[-2px] active:scale-95"
                >
                  <Mail className="w-4 h-4 text-zinc-950" />
                  <span>Kirim Pesan</span>
                </button>
              </Magnet>

              <Magnet magnetStrength={3} padding={20}>
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm transition-all hover:translate-y-[-2px] hover:border-amber-400 active:scale-95"
                >
                  <Github className="w-4 h-4 text-zinc-900" />
                  <span>Kunjungi GitHub</span>
                </a>
              </Magnet>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-200 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-600 text-xl font-bold"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-3 border border-amber-300">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Kirim Pesan Langsung</h3>
              <p className="text-zinc-500 text-xs mt-1">
                Hubungi {profile.name} terkait tawaran proyek atau peluang kerja.
              </p>
            </div>

            {sentSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-zinc-800">Pesan Berhasil Dikirim!</h4>
                <p className="text-xs text-zinc-500">Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Alamat Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Pesan</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Halo Eka, saya tertarik untuk mendiskusikan..."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-zinc-950 bg-amber-400 hover:bg-amber-500 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactCTA;
