
import React, { useState } from 'react';
import { Product } from '../types';
import { generateWhatsAppLink } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (product.sizes.length > 0 && !selectedSize) {
      e.preventDefault();
      setError('Por favor, seleccioná un talle para continuar.');
      return;
    }
    setError(null);
  };

  const selectSize = (size: string) => {
    setSelectedSize(size);
    setError(null);
  };

  return (
    <div className="pt-24 px-4 min-h-screen max-w-7xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Volver al catálogo
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-zinc-900 overflow-hidden">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 ${activeImage === idx ? 'border-white' : 'border-transparent'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`${product.name} visual ${idx}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-8 border-b border-zinc-900 pb-6">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-white">
              ${product.price.toLocaleString('es-AR')}
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Descripción</h3>
              <p className="text-zinc-300 leading-relaxed font-light">
                {product.description}
              </p>
              {product.isOversized && (
                <p className="text-xs text-zinc-400 mt-2 italic">* Esta prenda cuenta con moldería oversized real.</p>
              )}
            </div>

            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Talles Disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button 
                      key={s} 
                      onClick={() => selectSize(s)}
                      className={`px-4 py-2 text-sm font-bold transition-all border ${
                        selectedSize === s 
                        ? 'bg-white text-black border-white scale-105' 
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {error && (
                  <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-3 animate-pulse">
                    {error}
                  </p>
                )}
              </div>
            )}
          </div>

          <a 
            href={generateWhatsAppLink(product.name, selectedSize || undefined)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBuyClick}
            className="block w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-center hover:bg-zinc-200 transition-all transform hover:-translate-y-1"
          >
            Comprar por WhatsApp
          </a>
          
          <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-sm">
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider leading-relaxed">
              * Al hacer clic serás redirigido a WhatsApp para coordinar talle, stock y método de entrega en Bahía Blanca o envíos a todo el país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
