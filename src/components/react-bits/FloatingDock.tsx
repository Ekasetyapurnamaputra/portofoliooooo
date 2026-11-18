import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Code2, FolderGit2, GraduationCap, Send, Download } from 'lucide-react';

interface FloatingDockProps {
  onOpenCVModal?: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenCVModal }) => {
  const mouseX = useMotionValue(Infinity);

  const dockItems = [
    { title: 'Beranda', icon: Home, href: '#home' },
    { title: 'Tentang', icon: User, href: '#about' },
    { title: 'Keahlian', icon: Code2, href: '#skills' },
    { title: 'Proyek', icon: FolderGit2, href: '#projects' },
    { title: 'Pendidikan', icon: GraduationCap, href: '#education' },
    { title: 'Kontak', icon: Send, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-amber-200/80 shadow-xl shadow-amber-900/5 ring-1 ring-black/5"
      >
        {dockItems.map((item, index) => (
          <DockIcon key={index} mouseX={mouseX} item={item} />
        ))}

        <div className="w-[1px] h-6 bg-zinc-200 mx-1" />

        {/* Quick CV Download button in dock */}
        <button
          onClick={onOpenCVModal}
          className="relative group p-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold transition-transform hover:scale-110 active:scale-95 shadow-sm"
          title="Unduh CV"
        >
          <Download className="w-5 h-5" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Unduh CV
          </span>
        </button>
      </motion.div>
    </div>
  );
};

function DockIcon({ mouseX, item }: { mouseX: any; item: any }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-120, 0, 120], [40, 52, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      style={{ width, height: width }}
      className="relative flex items-center justify-center rounded-xl bg-amber-50/80 border border-amber-200/60 text-zinc-700 hover:text-amber-600 hover:bg-amber-100/80 transition-colors group"
    >
      <Icon className="w-5 h-5" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
        {item.title}
      </span>
    </motion.a>
  );
}

export default FloatingDock;

