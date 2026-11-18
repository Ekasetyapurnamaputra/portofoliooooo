import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled ? 'text-zinc-800' : ''
      } ${className}`}
      style={{
        backgroundImage: disabled
          ? 'none'
          : 'linear-gradient(120deg, rgba(217, 119, 6, 1) 0%, rgba(217, 119, 6, 1) 35%, rgba(254, 240, 138, 1) 50%, rgba(217, 119, 6, 1) 65%, rgba(217, 119, 6, 1) 100%)',
        backgroundSize: '250% 100%',
        animation: disabled ? 'none' : `shiny-sweep ${animationDuration} infinite linear`,
      }}
    >
      <style>{`
        @keyframes shiny-sweep {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
      {text}
    </span>
  );
};

export default ShinyText;
