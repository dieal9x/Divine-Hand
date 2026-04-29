import React from 'react';

export default function OfferBanner() {
  return (
    <div className="bg-brand-ink text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
          Limited Offer: <span className="text-brand-gold italic">Free Shipping</span> on your first order over $50 with code: <span className="font-bold">DIVINE2025</span>
        </p>
      </div>
    </div>
  );
}
