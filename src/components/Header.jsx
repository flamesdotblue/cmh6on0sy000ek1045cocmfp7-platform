import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Collections', href: '#collections' },
  { label: 'Celebrity Corner', href: '#celebrity' },
  { label: 'About Us', href: '#about' },
  { label: 'Store Locations', href: '#stores' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="font-serif text-xl tracking-widest text-white">A I Y A N A</a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Search" className="text-gray-300 transition hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="text-gray-300 transition hover:text-white">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="text-gray-300 transition hover:text-white">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-gray-300 transition hover:text-white">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-gray-200"
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 md:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-white/10 pt-3">
              <button aria-label="Search" className="text-gray-300 transition hover:text-white">
                <Search className="h-5 w-5" />
              </button>
              <button aria-label="Account" className="text-gray-300 transition hover:text-white">
                <User className="h-5 w-5" />
              </button>
              <button aria-label="Wishlist" className="text-gray-300 transition hover:text-white">
                <Heart className="h-5 w-5" />
              </button>
              <button aria-label="Cart" className="text-gray-300 transition hover:text-white">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
