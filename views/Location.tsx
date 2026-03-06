
import React from 'react';
import { STORE_LOCATION } from '../constants';

const Location: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_LOCATION)}`;

  return (
    <div className="pt-24 px-4 min-h-screen max-w-7xl mx-auto flex flex-col justify-center pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Information Column */}
        <div className="space-y-12">
          <header>
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Visit our store</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              NUESTRA <br /> <span className="text-zinc-600">UBICACIÓN</span>
            </h1>
          </header>

          <div className="space-y-10 max-w-md">
            {/* Address Section */}
            <div className="group">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">Dirección</h3>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl md:text-2xl font-light leading-snug hover:text-zinc-400 transition-colors flex items-start gap-3"
              >
                <span>{STORE_LOCATION}</span>
                <svg className="w-5 h-5 mt-1 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Hours Section */}
            <div>
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-5">Horarios de Atención</h3>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-white text-lg font-bold mb-3">Lunes a Sábado</span>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col border-l border-zinc-800 pl-4">
                      <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-1">Mañana</span>
                      <span className="text-zinc-200 font-medium">10:00 a 13:00 hs</span>
                    </div>
                    <div className="flex flex-col border-l border-zinc-800 pl-4">
                      <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-1">Tarde</span>
                      <span className="text-zinc-200 font-medium">16:00 a 20:00 hs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="pt-6">
              <a 
                href={googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all group shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Visual/Image Column */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[700px] w-full overflow-hidden group">
          {/* Main Background Image */}
          <img 
            src="https://image2url.com/r2/default/images/1770742359974-8dc9453d-b144-4757-9176-84a2e12fdb27.jpeg" 
            alt="Yamore Store Front" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-110 grayscale brightness-90"
          />
          
          {/* Premium Overlay (approx 50%) */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          <div className="relative z-20 h-full flex items-center justify-center p-8">
            <div className="text-center p-10 bg-zinc-950/40 backdrop-blur-sm border border-white/5 max-w-sm">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md text-white flex items-center justify-center mx-auto mb-6 rounded-full border border-white/20">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
              </div>
              <p className="text-white text-xs font-black uppercase tracking-[0.4em] mb-3">Visítanos</p>
              <p className="text-zinc-300 text-[10px] uppercase tracking-widest leading-relaxed opacity-80">
                Viví la experiencia YAMORE en persona.
              </p>
            </div>
          </div>
          
          {/* Corner accent for mobile and desktop */}
          <div className="absolute bottom-8 right-8 z-20 opacity-20">
            <span className="text-4xl font-black text-white select-none leading-none tracking-tighter italic">BHI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
