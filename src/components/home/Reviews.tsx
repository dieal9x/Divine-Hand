import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../../constants/data';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif">Community Voices</h2>
          <p className="text-sm text-brand-ink/60 uppercase tracking-widest">Stories from Divine Hand collectors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="space-y-6 text-center">
              <p className="text-lg font-serif italic text-brand-ink/80 leading-relaxed">
                "{review.content}"
              </p>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">{review.author}</p>
                <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
