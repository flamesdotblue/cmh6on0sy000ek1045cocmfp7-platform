import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-left">
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.35em] text-emerald-300/80">Couture at its finest</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">
          Bridal Couture & Designer Ready-to-Wear
        </h1>
        <p className="mt-4 max-w-xl text-gray-300">
          Experience bespoke craftsmanship and a seamless shopping journey—custom bridal, lehengas, sarees, and refined accessories.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#collections"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Explore Collections
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
