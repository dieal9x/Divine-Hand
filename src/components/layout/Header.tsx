import React from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-brand-beige/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Menu className="h-6 w-6 text-brand-ink" />
          </div>

          {/* Logo */}
          <div className="flex-1 text-center md:text-left">
            <Link to="/" className="text-2xl font-serif tracking-tight text-brand-ink uppercase">
              Divine <span className="font-light italic text-brand-gold text-red-600">Hand</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-10 text-xs font-medium uppercase tracking-[0.14em] text-brand-ink/70">
            <Link to="/" className="hover:text-brand-ink transition-colors">Prints</Link>
            <Link to="/" className="hover:text-brand-ink transition-colors">Frames</Link>
            <Link to="/" className="hover:text-brand-ink transition-colors">Gifts</Link>
            <Link to="/" className="hover:text-brand-ink transition-colors">Decor</Link>
          </nav>

          {/* Actions */}
          <div className="flex flex-1 items-center justify-end space-x-6">
            <button className="hidden md:block">
              <Search className="h-5 w-5 text-brand-ink/80" />
            </button>
            <button>
              <User className="h-5 w-5 text-brand-ink/80" />
            </button>
            <button className="group relative">
              <ShoppingBag className="h-5 w-5 text-brand-ink" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-ink text-[10px] text-white">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
