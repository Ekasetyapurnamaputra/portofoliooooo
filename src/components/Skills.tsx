import React, { useState } from 'react';
import { 
  Layout, Palette, Wind, FileCode2, 
  Atom, Database, Leaf, Server, Flame, GitBranch, Cpu 
} from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';
import SpotlightCard from './react-bits/SpotlightCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Palette': return Palette;
      case 'Wind': return Wind;
      case 'FileCode2': return FileCode2;
      case 'Atom': return Atom;
      case 'Database': return Database;
      case 'Leaf': return Leaf;
      case 'Server': return Server;
      case 'Flame': return Flame;
      case 'GitBranch': return GitBranch;
      default: return Cpu;
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Semua Teknologi' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Alat & Git' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Keahlian Saya
              </span>
              <span className="h-0.5 w-6 bg-amber-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Keahlian <span className="text-amber-500">Teknis</span>
            </h2>
          </div>
          
          <p className="text-zinc-500 text-sm max-w-md md:text-right leading-relaxed">
            Berikut adalah teknologi dan perangkat pengembangan yang saya kuasai dan gunakan dalam membangun aplikasi web yang handal.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-zinc-900 shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-amber-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconName);
            return (
              <SpotlightCard
                key={index}
                className="!p-3.5 rounded-xl border border-zinc-200/90 bg-white hover:border-amber-400 flex items-center gap-3 transition-transform hover:-translate-y-0.5 cursor-default group"
                spotlightColor="rgba(251, 191, 36, 0.25)"
              >
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color || '#f59e0b'}15` }}
                >
                  <Icon 
                    className="w-5 h-5" 
                    style={{ color: skill.color || '#f59e0b' }} 
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-zinc-800 truncate group-hover:text-amber-600 transition-colors">
                    {skill.name}
                  </p>
                  {skill.sublabel && (
                    <span className="text-[10px] text-zinc-400 font-medium block">
                      {skill.sublabel}
                    </span>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
