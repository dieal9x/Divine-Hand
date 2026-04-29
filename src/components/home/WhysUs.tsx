import React from 'react';
import { Camera, ShieldCheck, Truck, Recycle } from 'lucide-react';

const PERKS = [
  {
    icon: Camera,
    title: 'Archival Quality',
    desc: 'Museum-grade paper and inks that last over 200 years without fading.'
  },
  {
    icon: ShieldCheck,
    title: 'Expert Curation',
    desc: 'Each order is reviewed by our in-house designers for color and layout.'
  },
  {
    icon: Truck,
    title: 'Global Delivery',
    desc: 'Ships within 48 hours in luxury, sustainable packaging.'
  },
  {
    icon: Recycle,
    title: 'Eco-Conscious',
    desc: 'Sustainably sourced wood and 100% recycled paper stocks.'
  }
];

export default function WhysUs() {
  return (
    <section className="py-24 bg-white border-y border-brand-beige/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {PERKS.map((perk, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 bg-brand-cream rounded-full flex items-center justify-center">
                <perk.icon className="h-5 w-5 text-brand-gold" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-ink">{perk.title}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed max-w-[240px]">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
