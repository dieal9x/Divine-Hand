import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants/data';
import PhotoUploader from '../components/product/PhotoUploader';
import StickyAddToCart from '../components/product/StickyAddToCart';
import { Check, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('8x10');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-10 text-[10px] uppercase tracking-widest text-brand-ink/40 flex items-center space-x-2">
          <Link to="/" className="hover:text-brand-ink">Shop</Link>
          <span>/</span>
          <span className="text-brand-ink">{product.category}</span>
          <span>/</span>
          <span className="text-brand-ink font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Main Product Image Container */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] bg-brand-cream overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="aspect-square bg-brand-cream overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${product.id + i}/800/800`} 
                      alt="Detail" 
                      className="h-full w-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Details & Customization */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                 <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                    ))}
                 </div>
                 <span className="text-[10px] text-brand-ink/40 uppercase tracking-widest">48 Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-ink leading-tight">{product.name}</h1>
              <p className="text-xl font-light text-brand-gold">${product.price}</p>
              <p className="text-sm text-brand-ink/60 leading-relaxed max-w-md">
                {product.description}
              </p>
            </div>

            <div className="space-y-10">
              {/* Photo Uploader Simulation */}
              <PhotoUploader />

              {/* Selection Options */}
              <div className="space-y-6">
                <div className="space-y-3">
                   <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Select Size</h3>
                   <div className="flex flex-wrap gap-3">
                      {['8x10', '11x14', '16x20'].map((size) => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-6 py-3 text-xs tracking-widest border transition-all ${
                            selectedSize === size ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-beige text-brand-ink hover:border-brand-ink/40'
                          }`}
                        >
                          {size}"
                        </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Quantity</h3>
                    <div className="flex border border-brand-beige w-max">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="px-4 py-2 hover:bg-brand-cream transition-colors text-brand-ink">—</button>
                       <span className="px-6 py-2 border-x border-brand-beige text-sm font-medium">{quantity}</span>
                       <button 
                         onClick={() => setQuantity(quantity + 1)}
                         className="px-4 py-2 hover:bg-brand-cream transition-colors text-brand-ink">+</button>
                    </div>
                </div>
              </div>

              {/* Desktop Add to Cart */}
              <div className="space-y-4">
                <button className="hidden md:flex w-full bg-brand-ink text-white text-xs font-semibold uppercase tracking-[0.2em] py-5 items-center justify-center space-x-3 hover:bg-brand-ink/90 transition-all group">
                  <span className="group-hover:translate-x-[-4px] transition-transform">Add to Collection</span>
                  <Check className="h-4 w-4" />
                </button>
                <button className="hidden md:flex w-full bg-brand-gold text-white text-xs font-semibold uppercase tracking-[0.2em] py-5 items-center justify-center space-x-3 hover:bg-brand-gold/90 transition-all">
                  <span>Fast Checkout</span>
                </button>
              </div>

              {/* USP List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-beige">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-brand-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/60 font-semibold">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-4 w-4 text-brand-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/60 font-semibold">Tracked Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-4 w-4 text-brand-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/60 font-semibold">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upsells */}
        <section className="mt-32 pt-24 border-t border-brand-beige">
           <h2 className="text-3xl font-serif mb-12 text-center italic">Complete the memory</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map((p, i) => (
                <div key={p.id} className="group">
                  <Link to={`/product/${p.id}`} className="space-y-4">
                    <div className="aspect-square bg-brand-cream overflow-hidden">
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-serif">{p.name}</h4>
                      <p className="text-xs text-brand-ink/60">${p.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
           </div>
        </section>
      </div>

      <StickyAddToCart product={product} onAddToCart={() => {}} />
    </div>
  );
}
