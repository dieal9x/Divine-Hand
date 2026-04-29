import React from 'react';
import { PRODUCTS } from '../../constants/data';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Best Sellers <br /> <span className="italic font-light">Loved by thousands.</span>
            </h2>
            <p className="text-sm text-brand-ink/60 uppercase tracking-widest">Explore our most meaningful pieces</p>
          </div>
          <button className="text-xs font-semibold uppercase tracking-widest border-b border-brand-ink pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
            View All Collection
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
