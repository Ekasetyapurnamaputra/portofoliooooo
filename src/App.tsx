import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import ClickSpark from './components/react-bits/ClickSpark';
import ShapeGrid from './components/react-bits/ShapeGrid';
import FloatingDock from './components/react-bits/FloatingDock';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-zinc-800 font-sans selection:bg-amber-200 selection:text-amber-900 pb-20">
      
      {/* React Bits: ShapeGrid Interactive Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <ShapeGrid
          shape="tile"
          direction="up"
          lineColor="rgba(217, 119, 6, 0.12)"
          hoverColor="#f59e0b"
          hoverFillColor="#fbbf24"
          fillOpacity={0.16}
          cellSize={42}
          speed={0.4}
          tiltX={0}
          tiltY={0}
          rainbow={false}
          radius={2.8}
          trail={0.8}
          glow={0.5}
          twinkle={0.25}
          fade={0.4}
          clickCascade={true}
          intro={false}
          className="w-full h-full"
        />
      </div>

      {/* ClickSpark particle effect on any click */}
      <ClickSpark sparkColor="#f59e0b" sparkSize={8} sparkRadius={26} sparkCount={8} />

      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-200/30 via-amber-100/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header Navigation */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ContactCTA />
      </main>

      {/* Interactive macOS-style Floating Dock (React Bits) */}
      <FloatingDock onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
};

export default App;
