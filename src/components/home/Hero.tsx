import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1544391490-41071060965d?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-medium">Archival Quality Prints</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.1]">
            Turn Your Memories Into <br /> <span className="italic font-light">Beautiful Keepsakes</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Museum-grade materials and artisanal craftsmanship for the stories that matter most.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 pt-6">
            <Link 
              to="/" 
              className="px-10 py-4 bg-white text-brand-ink text-xs font-semibold uppercase tracking-widest hover:bg-brand-cream transition-colors rounded-none w-full md:w-auto"
            >
              Start Creating
            </Link>
            <Link 
              to="/" 
              className="px-10 py-4 bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-none w-full md:w-auto"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <div className="w-[1px] h-12 bg-white/40" />
        <span className="text-[9px] uppercase tracking-widest text-white">Scroll</span>
      </div>
    </section>
  );
}
