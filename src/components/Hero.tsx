import React from 'react';
import { ArrowRight, Github, Globe, Code2, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DecryptedText from './react-bits/DecryptedText';
import Magnet from './react-bits/Magnet';
import LanyardCard from './react-bits/LanyardCard';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Warm ambient background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[600px] hero-halo pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-sm text-xs font-bold text-emerald-800 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profile.availability}</span>
            </div>

            {/* Headline with DecryptedText */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Halo, saya{' '}
                <span className="text-amber-500 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-8">
                  <DecryptedText
                    text={profile.name}
                    speed={45}
                    maxIterations={12}
                    className="text-amber-500 font-extrabold"
                    encryptedClassName="text-amber-400"
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-zinc-600 font-mono">
                {profile.fullName}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-900 font-extrabold text-xs border border-amber-300">
                  SMK PGRI 2 PONOROGO
                </span>
                <span className="text-zinc-400 font-bold">•</span>
                <span className="px-3 py-1 rounded-lg bg-zinc-900 text-amber-300 font-extrabold text-xs">
                  INOSOFT TRANSISTEM INTERN
                </span>
              </div>
            </div>

            {/* Subtext description */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl">
              {profile.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnet magnetStrength={2.5} padding={25}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-zinc-900 bg-amber-400 hover:bg-amber-500 shadow-md shadow-amber-400/25 transition-all hover:translate-y-[-2px] active:scale-95"
                >
                  <span>Lihat Proyek Saya</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnet>

              <Magnet magnetStrength={3} padding={25}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm transition-all hover:translate-y-[-2px] active:scale-95 hover:border-amber-300"
                >
                  <Send className="w-4 h-4 text-zinc-500" />
                  <span>Hubungi Saya</span>
                </a>
              </Magnet>
            </div>

            {/* Social Links Row (LinkedIn Removed, GitHub verified) */}
            <div className="pt-4 flex items-center gap-3">
              {[
                { icon: Github, href: profile.socialLinks.github, label: 'GitHub' },
                { icon: Code2, href: '#skills', label: 'Keahlian' },
                { icon: Globe, href: profile.socialLinks.portfolio, label: 'Website' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Magnet key={idx} magnetStrength={4} padding={15}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-amber-600 hover:border-amber-300 hover:shadow-sm transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </Magnet>
                );
              })}
            </div>
          </div>

          {/* Right Column: INTERACTIVE 3D LANYARD ID CARD */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Halo glow aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-100 opacity-60 blur-3xl pointer-events-none" />

            {/* The Draggable Lanyard Card with user's real photo */}
            <LanyardCard />

            {/* Floating Badge 1 (Top Left) */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-amber-200 shadow-lg shadow-amber-200/40 items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/60 flex items-center justify-center font-mono font-bold text-amber-700 text-sm">
                {profile.floatingBadge1.tag}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-900 leading-tight">
                  {profile.floatingBadge1.title}
                </p>
                <p className="text-[11px] text-zinc-500 font-medium">
                  {profile.floatingBadge1.subtitle}
                </p>
              </div>
            </div>

            {/* Floating Badge 2 (Bottom Right) */}
            <div className="hidden sm:flex absolute -bottom-4 -right-6 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-amber-200 shadow-lg shadow-amber-200/40 items-center gap-3 animate-float-slow" style={{ animationDelay: '2s' }}>
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-900 leading-tight">
                  Inosoft Transistem
                </p>
                <p className="text-[11px] text-zinc-500 font-medium">
                  Surabaya Industrial Intern
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
