import React from 'react';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SpotlightCard from './react-bits/SpotlightCard';

export const Education: React.FC = () => {
  const { education, experience } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Pendidikan
              </span>
              <span className="h-0.5 w-6 bg-amber-400"></span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-8">
              Pendidikan <span className="text-amber-500">Formal</span>
            </h2>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <SpotlightCard
                  key={idx}
                  className="!p-5 rounded-2xl border border-amber-200/60 bg-white hover:border-amber-400 shadow-sm"
                  spotlightColor="rgba(251, 191, 36, 0.2)"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-300 text-amber-700">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-zinc-900 leading-snug">
                          {item.degree}
                        </h3>
                        <span className="text-xs font-bold text-zinc-400 shrink-0 font-mono">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-700 font-bold mt-1">
                        {item.institution}
                      </p>
                      <p className="text-xs font-semibold text-amber-600 mt-1">
                        {item.score}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Internship & Experience Column */}
          <div id="experience">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Pengalaman Kerja
              </span>
              <span className="h-0.5 w-6 bg-amber-400"></span>
            </div>

            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-8">
              Pengalaman <span className="text-amber-500">Magang Industri</span>
            </h2>

            <div className="space-y-4">
              {experience.map((item, idx) => (
                <SpotlightCard
                  key={idx}
                  className="!p-5 rounded-2xl border border-amber-200/60 bg-white hover:border-amber-400 shadow-sm group cursor-pointer"
                  spotlightColor="rgba(251, 191, 36, 0.2)"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-300 text-amber-700">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                          {item.role}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs font-bold text-amber-700/90 mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
