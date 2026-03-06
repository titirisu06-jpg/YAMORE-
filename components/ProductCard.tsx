
import React from 'react';
import { Product } from '../types';
import { generateWhatsAppLink } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col space-y-3 cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {product.isOversized && (
          <span className="absolute top-3 left-3 bg-zinc-950/80 text-[10px] font-bold px-2 py-1 tracking-widest backdrop-blur-sm border border-zinc-800">
            OVERSIZED
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-white">
          ${product.price.toLocaleString('es-AR')}
        </p>
      </div>
      <a 
        href={generateWhatsAppLink(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 bg-zinc-100 text-zinc-950 text-[10px] font-black tracking-widest uppercase text-center hover:bg-white transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
