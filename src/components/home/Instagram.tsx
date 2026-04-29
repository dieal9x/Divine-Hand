import React from 'react';
import { INSTAGRAM_POSTS } from '../../constants/data';

export default function Instagram() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif italic font-light">@divinehand9</h2>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink/60">Share your stories with us</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {INSTAGRAM_POSTS.map((post) => (
            <a key={post.id} href={post.link} className="relative aspect-square overflow-hidden group">
              <img 
                src={post.image} 
                alt="Instagram Community" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
