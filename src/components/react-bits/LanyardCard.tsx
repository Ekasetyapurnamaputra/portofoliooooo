import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ShieldCheck, QrCode, Wifi } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import profilePhoto from '../../assets/profile.jpg';

interface LanyardCardProps {
  className?: string;
}

export const LanyardCard: React.FC<LanyardCardProps> = ({ className = '' }) => {
  const { profile } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Physics motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth tilt and swinging
  const springConfig = { damping: 15, stiffness: 120, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-18, 18]), springConfig);
  const holographicX = useTransform(mouseX, [-200, 200], ['0%', '100%']);
  const holographicY = useTransform(mouseY, [-200, 200], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col items-center select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* LANYARD STRAP / TALI LANYARD */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        {/* Top attachment anchor */}
        <div className="w-16 h-3 bg-zinc-800 rounded-t-sm shadow-md" />

        {/* Realistic Fabric Lanyard Ribbon */}
        <div className="relative w-10 h-28 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600 shadow-lg border-x-2 border-amber-700/40 flex items-center justify-center overflow-hidden">
          {/* Lanyard Fabric Pattern & Brand Text */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
          <div className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-950/80 -rotate-90 whitespace-nowrap drop-shadow-sm select-none">
            SMK PGRI 2 • INOSOFT
          </div>
        </div>

        {/* Metal Carabiner Clip & Ring */}
        <div className="relative -mt-1 flex flex-col items-center">
          {/* Metal D-Ring */}
          <div className="w-7 h-4 rounded-full border-4 border-zinc-400 bg-zinc-200 shadow-inner" />
          {/* Metal Swivel Clasp */}
          <div className="w-3.5 h-6 bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 rounded-sm shadow-md -mt-1 border border-zinc-400" />
          {/* Badge Clip Hook */}
          <div className="w-5 h-3 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-b-md shadow-sm -mt-0.5" />
        </div>
      </div>

      {/* DRAGGABLE & SWINGING 3D ID BADGE CARD */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 60, top: -40, bottom: 60 }}
        dragElastic={0.4}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        animate={{
          y: isDragging ? 0 : [0, 6, 0],
          rotateZ: isDragging ? 0 : [-1, 1, -1],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-20 -mt-1.5 w-[290px] sm:w-[320px] rounded-3xl bg-white p-4 shadow-2xl border-2 border-amber-200/90 shadow-amber-300/30 will-change-transform"
      >
        {/* Holographic glossy light sheen */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-30 mix-blend-color-dodge transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.45 : 0.15,
            background: 'linear-gradient(135deg, rgba(251,191,36,0.8) 0%, rgba(59,130,246,0.6) 50%, rgba(236,72,153,0.8) 100%)',
            backgroundPosition: `${holographicX} ${holographicY}`,
          }}
        />

        {/* Clip punch hole at top of badge */}
        <div className="mx-auto w-10 h-3 rounded-full bg-zinc-800/10 border border-zinc-300 shadow-inner mb-3" />

        {/* Badge Header: School & Company */}
        <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center shadow-sm">
              RPL
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-zinc-900 leading-tight">
                SMK PGRI 2 PONOROGO
              </p>
              <p className="text-[9px] font-bold text-amber-600">
                INOSOFT TRANSISTEM INTERN
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <Wifi className="w-3.5 h-3.5 text-amber-500" />
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          </div>
        </div>

        {/* Profile Photo: User's real photo wearing SMK PGRI 2 uniform & lanyard */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200 bg-gradient-to-b from-amber-50 to-amber-100 h-56 shadow-inner group">
          <img
            src={profilePhoto}
            alt={profile.fullName}
            className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
          />

          {/* Lanyard hanging badge overlay around neck/chest */}
          <div className="absolute top-2 left-2 bg-zinc-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300 flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>ID PASS #2024</span>
          </div>

          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[9px] font-mono font-bold text-zinc-700 shadow-sm">
            MAGANG SURABAYA
          </div>
        </div>

        {/* Badge Details: Name, Role, & Tech */}
        <div className="mt-3.5 space-y-1 text-center">
          <h3 className="text-base font-extrabold text-zinc-900 tracking-tight">
            {profile.fullName}
          </h3>
          <p className="text-xs font-bold text-amber-600">
            Web & Full-Stack Developer
          </p>
          <p className="text-[11px] text-zinc-500 font-medium">
            Siswa Rekayasa Perangkat Lunak (RPL)
          </p>
        </div>

        {/* Key skills pills inside ID card */}
        <div className="mt-2.5 flex flex-wrap justify-center gap-1">
          {['Laravel', 'React', 'PHP', 'MySQL', 'MongoDB'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[9px] font-bold text-amber-900"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Security Barcode & QR Code */}
        <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between px-2">
          {/* Simulated Barcode */}
          <div className="flex flex-col items-start">
            <div className="flex gap-[2px] h-6 items-end">
              <span className="w-[2px] h-6 bg-zinc-800" />
              <span className="w-[1px] h-4 bg-zinc-800" />
              <span className="w-[3px] h-6 bg-zinc-800" />
              <span className="w-[1px] h-5 bg-zinc-800" />
              <span className="w-[2px] h-6 bg-zinc-800" />
              <span className="w-[1px] h-3 bg-zinc-800" />
              <span className="w-[3px] h-6 bg-zinc-800" />
              <span className="w-[2px] h-5 bg-zinc-800" />
              <span className="w-[1px] h-6 bg-zinc-800" />
              <span className="w-[3px] h-4 bg-zinc-800" />
              <span className="w-[1px] h-6 bg-zinc-800" />
            </div>
            <span className="text-[8px] font-mono text-zinc-400 mt-0.5">NISN.2023-RPL-089</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <QrCode className="w-6 h-6 text-zinc-700" />
          </div>
        </div>

        {/* Drag Hint Tooltip */}
        <div className="mt-2 text-center">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100/80 text-[10px] font-bold text-amber-800 animate-pulse">
            👆 Geser atau tarik ID Card ini!
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LanyardCard;

