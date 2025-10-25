import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#shop" className="hover:text-white">Wedding Gowns</a></li>
              <li><a href="#shop" className="hover:text-white">Lehengas</a></li>
              <li><a href="#shop" className="hover:text-white">Sarees</a></li>
              <li><a href="#shop" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> hello@aiyana.design</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +1 555 123 4567</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> 100 Couture Ave, Suite 12, New York, NY</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 text-gray-300 transition hover:border-white/40 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 text-gray-300 transition hover:border-white/40 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} AIYANA Atelier. All rights reserved.</p>
          <p>Crafted with elegance. Inspired by couture.</p>
        </div>
      </div>
    </footer>
  );
}
