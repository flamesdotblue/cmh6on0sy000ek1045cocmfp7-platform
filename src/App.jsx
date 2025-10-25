import React from 'react';
import Header from './components/Header';
import RouterView from './components/RouterView';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:px-6">
        <RouterView />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
