
import React from 'react';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: Category;
  products: Product[];
  onProductClick: (p: Product) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, products, onProductClick }) => {
  return (
    <section className="py-12 border-b border-zinc-900">
      <div className="px-4 mb-6 flex justify-between items-end">
        <h2 className="text-2xl font-black tracking-tighter uppercase italic">{category}</h2>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
          {products.length === 0 ? 'Próximamente' : `${products.length} productos`}
        </span>
      </div>
      
      {products.length > 0 ? (
        <div className="flex overflow-x-auto pb-4 gap-6 px-4 scrollbar-hide">
          {products.map((p) => (
            <div key={p.id} className="min-w-[240px] md:min-w-[320px]">
              <ProductCard product={p} onClick={() => onProductClick(p)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="px-4 py-12 bg-zinc-900/20 border border-dashed border-zinc-800 flex items-center justify-center">
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-black">Nuevos ingresos pronto</p>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
