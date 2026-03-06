
import React from 'react';
import { featuredProducts } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onProductClick: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick }) => {
  const handleExplore = () => {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Imagen de Fondo con Blur Sutil */}
        <img 
          src="https://image2url.com/r2/default/images/1771856405686-2b0e5d99-0fa0-4b6c-be55-01d1065ba411.jpeg" 
          alt="Yamore Urban Wear Hero" 
          className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
        />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.85] drop-shadow-2xl">
            YAMORE <br/> <span className="text-zinc-400">URBAN WEAR</span>
          </h1>
          <p className="text-zinc-200 text-base md:text-xl max-w-2xl mx-auto mb-12 font-medium tracking-wide drop-shadow-lg">
            Minimalismo premium. Cortes oversized. <br/> La identidad urbana de Bahía Blanca.
          </p>
          <button 
            onClick={handleExplore}
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            Explorar Catálogo
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-4">New Arrivals</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Destacados / Nuevos Ingresos</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-32 px-4 bg-zinc-900/30 border-y border-zinc-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[12rem] font-black text-zinc-800/10 select-none pointer-events-none uppercase italic">
            STREET
          </span>
          <p className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic relative z-10">
            "No es solo ropa, es la forma en la que habitamos la ciudad."
          </p>
          <div className="mt-12 h-px w-24 bg-zinc-700 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
