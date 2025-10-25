import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CatalogSections from './components/CatalogSections';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <CatalogSections />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Chat"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
