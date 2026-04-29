import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-beige py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-tight text-brand-ink uppercase">
              Divine <span className="font-light italic text-brand-gold text-brand-red">Hand</span>
            </Link>
            <p className="text-sm text-brand-ink/60 leading-relaxed">
              We believe in the beauty of tangible memories. Our products are crafted with care to help your stories live forever.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-brand-ink/60 hover:text-brand-ink cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-brand-ink/60 hover:text-brand-ink cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-brand-ink/60 hover:text-brand-ink cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Polaroid Prints</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Gallery Frames</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Personalized Gifts</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Room Decor</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Support</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Returns</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">Track Order</Link></li>
              <li><Link to="/" className="hover:text-brand-ink transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Connect</h4>
            <p className="text-sm text-brand-ink/60">Join our journal for creative ideas and exclusive offers.</p>
            <div className="flex border-b border-brand-ink/20 pb-2">
              <input 
                type="email" 
                placeholder="email address" 
                className="bg-transparent text-sm w-full outline-none placeholder:text-brand-ink/30"
              />
              <button className="text-xs font-medium uppercase tracking-wider hover:text-brand-gold transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-brand-beige pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-brand-ink/40 uppercase tracking-[0.15em]">© 2025 Divine Hand. Touch of Divine.</p>
          <div className="flex space-x-8 text-[10px] text-brand-ink/40 uppercase tracking-[0.15em]">
            <Link to="/" className="hover:text-brand-ink transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-brand-ink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
