import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide">Information</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#/about" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#/contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#/careers" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#/privacy" className="hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#/shop?category=gowns" className="hover:text-slate-900">Wedding Gowns</a></li>
              <li><a href="#/shop?category=lehengas" className="hover:text-slate-900">Lehengas</a></li>
              <li><a href="#/shop?category=sarees" className="hover:text-slate-900">Sarees</a></li>
              <li><a href="#/shop?category=accessories" className="hover:text-slate-900">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide">Customer Service</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#/faqs" className="hover:text-slate-900">FAQs</a></li>
              <li><a href="#/shipping" className="hover:text-slate-900">Shipping</a></li>
              <li><a href="#/returns" className="hover:text-slate-900">Returns</a></li>
              <li><a href="#/terms" className="hover:text-slate-900">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> hello@aiyana.design</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +1 555 123 4567</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> 100 Couture Ave, Suite 12, New York, NY</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-slate-400 hover:text-slate-900"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-slate-400 hover:text-slate-900"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} AIYANA Atelier. All rights reserved.</p>
          <p>Crafted with elegance. Inspired by couture.</p>
        </div>
      </div>
    </footer>
  );
}
