
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 lg:pt-0 flex flex-col lg:flex-row bg-zinc-950">
      {/* Text Section (Left) */}
      <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 order-2 lg:order-1 lg:pr-32">
        <div className="max-w-xl">
          <header className="mb-16">
            <span className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase mb-6 block">
              Nuestra Historia
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif uppercase tracking-widest leading-[0.85] text-white">
              YAMORE
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-zinc-400 mt-4 tracking-wide">
              STREET SOUL
            </h2>
          </header>

          <div className="space-y-12">
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
              Nacidos en las calles de Bahía Blanca. <br className="hidden md:block" />
              Redefinimos la indumentaria urbana priorizando cortes <span className="text-white font-medium">minimalistas</span> y <span className="text-white font-medium">comodidad absoluta</span>.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light italic border-l border-zinc-700 pl-6">
              "Lo oversized no es una moda, <br className="hidden lg:block" /> es una declaración de libertad espacial y mental."
            </p>
          </div>

          <div className="mt-20 flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              EST. 2024
            </span>
          </div>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 lg:hidden" />
        <div className="absolute inset-0 bg-black/20 z-[5]" />

        <img
          src="https://image2url.com/r2/default/images/1772808132921-e906124e-536f-447d-913b-a74ca9d1c7ad.jpg"
          alt="Yamore Urban Brand"
          className="w-full h-full object-cover grayscale-[30%] contrast-110 transition-transform duration-[20s] hover:scale-105"
        />

        {/* Minimal Branding Overlay */}
        <div className="absolute bottom-8 right-8 z-20 text-right">
          <p className="text-[8rem] font-serif text-white/10 absolute -bottom-12 -right-4 select-none">
            YMR
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
