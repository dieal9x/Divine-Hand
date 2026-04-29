import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';

interface StickyAddToCartProps {
  product: Product;
  onAddToCart: () => void;
}

export default function StickyAddToCart({ product, onAddToCart }: StickyAddToCartProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-brand-beige p-4 sticky-cart-shadow">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-1">
          <h4 className="text-sm font-serif truncate">{product.name}</h4>
          <p className="text-xs font-semibold text-brand-ink/60">${product.price}</p>
        </div>
        <button 
          onClick={onAddToCart}
          className="flex-1 bg-brand-ink text-white text-[10px] font-semibold uppercase tracking-widest py-4 flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
