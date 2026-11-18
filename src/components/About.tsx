import React from 'react';
import { User, Mail, MapPin, Phone, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './react-bits/SpotlightCard';
import Magnet from './react-bits/Magnet';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const infoItems = [
    {
      label: 'Nama Lengkap',
      value: profile.fullName,
      icon: User,
    },
    {
      label: 'Email',
      value: profile.email,
      icon: Mail,
      isLink: true,
      href: `mailto:${profile.email}`,
    },
    {
      label: 'Lokasi',
      value: profile.location,
      icon: MapPin,
    },
    {
      label: 'Telepon / WhatsApp',
      value: profile.phone,
      icon: Phone,
      isLink: true,
      href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`,
    },
    {
      label: 'Sekolah & Jurusan',
      value: profile.educationBrief,
      icon: GraduationCap,
    },
    {
      label: 'Pengalaman Magang',
      value: profile.internshipBrief,
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 bg-amber-50/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill / Tag */}
        <div className="flex items-center gap-2 mb-2">
          <span className="h-0.5 w-6 bg-amber-400"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Tentang Saya
          </span>
          <span className="h-0.5 w-6 bg-amber-400"></span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-12">
          Mari berkenalan <span className="text-amber-500">lebih dekat</span> dengan saya
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Text / Bio */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
              {profile.fullBio}
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Selama menempuh pendidikan di <strong>SMK PGRI 2 Ponorogo</strong> dan melaksanakan magang industri di <strong>PT Inosoft Transistem Surabaya</strong>, saya aktif memperdalam keterampilan teknis dalam pengembangan website dinamis, perancangan database terstruktur, dan implementasi arsitektur MVC modern.
            </p>
            <div>
              <Magnet magnetStrength={3} padding={25}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-zinc-900 bg-amber-400 hover:bg-amber-500 shadow-sm transition-all hover:translate-y-[-2px] active:scale-95"
                >
                  <span>Hubungi Saya Untuk Kolaborasi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnet>
            </div>
          </div>

          {/* Right Info Grid (with React Bits SpotlightCards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  className="p-5 flex items-start gap-4 border border-amber-200/60 bg-white/95 hover:border-amber-400"
                  spotlightColor="rgba(251, 191, 36, 0.22)"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200 text-amber-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className="text-sm font-bold text-zinc-800 hover:text-amber-600 truncate block transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-zinc-800 truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
