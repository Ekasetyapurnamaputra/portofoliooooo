import React from 'react';
import { Github, Sparkles, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './react-bits/SpotlightCard';
import Magnet from './react-bits/Magnet';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-amber-50/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Proyek Saya
              </span>
              <span className="h-0.5 w-6 bg-amber-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Proyek <span className="text-amber-500">Unggulan</span>
            </h2>
          </div>
          
          <p className="text-zinc-500 text-sm max-w-md md:text-right leading-relaxed">
            Berikut adalah proyek aplikasi web unggulan yang telah saya kembangkan beserta repositori kode sumbernya.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              className="!p-6 sm:!p-8 rounded-3xl border border-amber-200/80 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Project Mockup */}
                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-zinc-900 relative group aspect-video lg:aspect-auto lg:h-[280px]">
                  {/* Fake browser bar */}
                  <div className="h-6 bg-zinc-800/90 px-3 flex items-center gap-1.5 border-b border-zinc-700/60">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <div className="ml-2 text-[10px] text-zinc-400 font-mono truncate">
                      github.com/Ekasetyapurnamaputra/{project.title}
                    </div>
                  </div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Repositori terbuka di GitHub
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300/60">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-zinc-100 text-zinc-700 border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons: Only Source Code button as requested */}
                  <div className="pt-3">
                    <Magnet magnetStrength={3} padding={20}>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-500 shadow-sm shadow-amber-300/40 hover:shadow-md transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4 text-zinc-950" />
                        <span>Source Code</span>
                      </a>
                    </Magnet>
                  </div>

                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
