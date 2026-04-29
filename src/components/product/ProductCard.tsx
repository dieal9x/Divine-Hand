import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { cn } from '../../lib/utils';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block space-y-4">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <button className="w-full bg-white text-brand-ink text-[10px] font-semibold uppercase tracking-widest py-4 shadow-xl flex items-center justify-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Personalize</span>
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">{product.category}</p>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-serif text-brand-ink group-hover:text-brand-gold transition-colors">{product.name}</h3>
            <p className="text-sm font-medium text-brand-ink/80">${product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
