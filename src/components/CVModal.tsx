import React from 'react';
import { Download, X, FileText, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile, skills, education, experience } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-700 text-xl font-bold p-1 rounded-lg hover:bg-zinc-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-amber-100 pb-5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900">Curriculum Vitae</h3>
            <p className="text-xs text-zinc-500 font-semibold">{profile.fullName} • {profile.role}</p>
          </div>
        </div>

        {/* CV Content Preview */}
        <div className="space-y-6 text-sm text-zinc-700 bg-amber-50/40 p-6 rounded-2xl border border-amber-100">
          <div>
            <h4 className="font-extrabold text-zinc-900 text-base">{profile.fullName}</h4>
            <p className="text-xs text-amber-700 font-bold">{profile.role}</p>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              {profile.email} | {profile.phone} | {profile.location}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1 mb-2">
              Ringkasan Profesional
            </h5>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {profile.fullBio}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1 mb-2">
              Pendidikan Formal
            </h5>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between font-bold text-xs text-zinc-800">
                  <span>{edu.degree}</span>
                  <span className="text-zinc-500 font-mono">{edu.period}</span>
                </div>
                <div className="text-xs text-zinc-600">{edu.institution} - {edu.score}</div>
              </div>
            ))}
          </div>

          <div>
            <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1 mb-2">
              Pengalaman Magang Industri
            </h5>
            {experience.map((exp, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between font-bold text-xs text-zinc-800">
                  <span>{exp.role}</span>
                  <span className="text-zinc-500 font-mono">{exp.period}</span>
                </div>
                <div className="text-xs text-zinc-600 font-semibold">{exp.company}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{exp.description}</div>
              </div>
            ))}
          </div>

          <div>
            <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1 mb-2">
              Keahlian Teknis Utama
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, idx) => (
                <span key={idx} className="px-2.5 py-0.5 bg-white rounded-md border border-amber-200 text-xs font-bold text-zinc-700">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 mt-6 pt-4 border-t border-zinc-100">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl border border-zinc-300 hover:bg-zinc-50 text-xs font-bold text-zinc-700 flex items-center gap-2 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak CV</span>
          </button>

          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(
              `${profile.fullName}\n${profile.role}\nEmail: ${profile.email}\nPhone: ${profile.phone}\n\nRingkasan:\n${profile.fullBio}\n\nKeahlian: HTML, CSS, JavaScript, React, PHP, Laravel, MySQL, MongoDB`
            )}`}
            download={`${profile.fullName.replace(/\s+/g, '_')}_CV.txt`}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-xs font-bold text-zinc-950 flex items-center gap-2 shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Unduh File CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
