
import React from 'react';
import { BRAND_NAME, INSTAGRAM_HANDLE, STORE_LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-black mb-4">{BRAND_NAME}</h3>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            Indumentaria urbana premium diseñada para quienes buscan calidad y un estilo minimalista.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Ubicación</h4>
          <p className="text-zinc-500 text-sm">{STORE_LOCATION}</p>
          <p className="text-zinc-500 text-sm mt-1">Bahía Blanca, AR</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Síguenos</h4>
          <a 
            href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            Instagram: {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseño y Desarrollo Premium.</p>
      </div>
    </footer>
  );
};

export default Footer;
