
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 lg:pt-0 flex flex-col lg:flex-row bg-zinc-950">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 order-2 lg:order-1">
        <div className="max-w-xl">
          <header className="mb-12">
            <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase mb-4 block">
              The Essence / Nuestra Historia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-white">
              YAMORE <br /> 
              <span className="text-zinc-600">STREET SOUL.</span>
            </h1>
          </header>

          <div className="space-y-8">
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
              YAMORE nace en las calles de Bahía Blanca con el propósito de redefinir la indumentaria urbana local. 
              Creemos en la comodidad absoluta y en cortes que hablen de una personalidad fuerte y minimalista.
            </p>
            
            <div className="h-px w-24 bg-zinc-800" />
            
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light italic border-l-2 border-zinc-800 pl-6">
              "Cada una de nuestras prendas es seleccionada y diseñada pensando en la durabilidad de los materiales y la atemporalidad de los cortes. Lo oversized no es solo una moda para nosotros, es una declaración de libertad."
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900 flex items-center gap-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Desde Bahía Blanca al mundo</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 lg:hidden" />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        
        <img 
          src="https://image2url.com/r2/default/images/1770741405677-bda26001-4851-4238-b9d1-a3622ca87ce7.jpeg" 
          alt="Yamore Urban Brand" 
          className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[20s] hover:scale-110"
        />

        {/* Branding Overlay on Image */}
        <div className="absolute bottom-10 right-10 z-20 text-right">
          <p className="text-[10rem] font-black text-white/5 absolute -bottom-16 -right-8 select-none">
            YMR
          </p>
          <span className="text-white text-xs font-black tracking-[0.5em] uppercase vertical-text">
            EST. 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
