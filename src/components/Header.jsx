import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#/home' },
  { label: 'Shop', href: '#/shop' },
  { label: 'New Arrivals', href: '#/shop?new=1' },
  { label: 'Collections', href: '#/collections' },
  { label: 'Celebrity Corner', href: '#/celebrity' },
  { label: 'About Us', href: '#/about' },
  { label: 'Store Locations', href: '#/stores' },
  { label: 'Contact', href: '#/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#/home" className="font-serif text-xl tracking-[0.35em]">AIYANA</a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-slate-600 transition hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Search" className="text-slate-600 hover:text-slate-900"><Search className="h-5 w-5" /></button>
          <button aria-label="Account" className="text-slate-600 hover:text-slate-900"><User className="h-5 w-5" /></button>
          <button aria-label="Wishlist" className="text-slate-600 hover:text-slate-900"><Heart className="h-5 w-5" /></button>
          <button aria-label="Cart" className="text-slate-600 hover:text-slate-900"><ShoppingCart className="h-5 w-5" /></button>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="lg:hidden text-slate-700" aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 md:px-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm text-slate-700 hover:bg-slate-50">
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-slate-200 pt-3">
              <button aria-label="Search" className="text-slate-600 hover:text-slate-900"><Search className="h-5 w-5" /></button>
              <button aria-label="Account" className="text-slate-600 hover:text-slate-900"><User className="h-5 w-5" /></button>
              <button aria-label="Wishlist" className="text-slate-600 hover:text-slate-900"><Heart className="h-5 w-5" /></button>
              <button aria-label="Cart" className="text-slate-600 hover:text-slate-900"><ShoppingCart className="h-5 w-5" /></button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
