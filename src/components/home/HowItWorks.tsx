import React from 'react';
import { Upload, Sliders, PackageCheck } from 'lucide-react';

const STEPS = [
  {
    icon: Upload,
    title: 'Choose Your Moments',
    desc: 'Select photos from your phone, Instagram, or desktop gallery.'
  },
  {
    icon: Sliders,
    title: 'Customize Design',
    desc: 'Choose frame styles, paper types, and personalized captions.'
  },
  {
    icon: PackageCheck,
    title: 'Handcrafted With Love',
    desc: 'We print, frame, and deliver your keepsakes to your door.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-brand-cream/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
              Creating memories <br /> shouldn't be <span className="italic">complicated.</span>
            </h2>
            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 h-10 w-10 text-brand-gold font-serif text-2xl italic border-b border-brand-gold/30">
                    0{i+1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif">{step.title}</h3>
                    <p className="text-sm text-brand-ink/60 leading-relaxed flex items-center space-x-2">
                      <span>{step.desc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-beige overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1533158326339-7f3cf2204152?auto=format&fit=crop&q=80&w=800" 
                 alt="Process preview" 
                 className="h-full w-full object-cover"
               />
            </div>
            {/* Design detail overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl hidden md:block max-w-[280px]">
              <p className="text-xs font-serif italic text-brand-ink/60 mb-4">"The customizer made it so easy to see exactly how my wedding photos would look framed."</p>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-brand-cream" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-ink">Maria G.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
