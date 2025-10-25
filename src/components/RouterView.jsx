import React, { useEffect, useMemo, useState } from 'react';
import { Heart, Star, MapPin } from 'lucide-react';

// Simple hash router
function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash || '#/home');
  useEffect(() => {
    const handler = () => setRoute(window.location.hash || '#/home');
    window.addEventListener('hashchange', handler);
    if (!window.location.hash) window.location.hash = '#/home';
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return route;
}

const categories = [
  { key: 'gowns', name: 'Wedding Gowns', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1400&auto=format&fit=crop' },
  { key: 'lehengas', name: 'Bridal Lehengas', image: 'https://images.unsplash.com/photo-1603503367494-88d05ed1d634?q=80&w=1400&auto=format&fit=crop' },
  { key: 'sarees', name: 'Bridal Sarees', image: 'https://images.unsplash.com/photo-1516627145497-ae3f4e55bad6?q=80&w=1400&auto=format&fit=crop' },
  { key: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop' },
];

const products = [
  { id: 'p1', name: 'Ivory Silk Bridal Gown', price: 2999, type: 'couture', category: 'gowns', color: 'Ivory', occasion: 'Wedding', images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop',
  ]},
  { id: 'p2', name: 'Emerald Lehenga Set', price: 1899, type: 'couture', category: 'lehengas', color: 'Emerald', occasion: 'Festive', images: [
    'https://images.unsplash.com/photo-1577955138382-07c15f148ca1?q=80&w=1600&auto=format&fit=crop',
  ]},
  { id: 'p3', name: 'Pearl Choker', price: 220, type: 'ready', category: 'accessories', color: 'Pearl', occasion: 'Evening', images: [
    'https://images.unsplash.com/photo-1504653601220-f1a8f2d615b9?q=80&w=1600&auto=format&fit=crop',
  ]},
  { id: 'p4', name: 'Gold Clutch', price: 140, type: 'ready', category: 'accessories', color: 'Gold', occasion: 'Party', images: [
    'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1600&auto=format&fit=crop',
  ]},
  { id: 'p5', name: 'Hand-Embroidered Saree', price: 1299, type: 'couture', category: 'sarees', color: 'Crimson', occasion: 'Wedding', images: [
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1600&auto=format&fit=crop',
  ]},
];

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        {eyebrow && <p className="mb-1 text-xs uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>}
        <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

function ProductCard({ p, onEnquire }) {
  return (
    <a href={`#/product/${p.id}`} className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-800 shadow-sm ring-1 ring-slate-200 opacity-0 transition group-hover:opacity-100"
          onClick={(e) => { e.preventDefault(); /* wishlist action */ }}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-sm font-medium text-slate-900">{p.name}</h3>
        <p className="text-xs text-slate-600">{p.type === 'couture' ? 'Price on Request' : `$${p.price}`}</p>
        <div className="mt-3 flex gap-2">
          {p.type === 'couture' ? (
            <button
              onClick={(e) => { e.preventDefault(); onEnquire(p); }}
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
            >
              Make an Enquiry
            </button>
          ) : (
            <button
              onClick={(e) => { e.preventDefault(); alert('Added to cart'); }}
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-600"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </a>
  );
}

function EnquiryModal({ open, onClose, product }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  if (!open) return null;
  function submit(e) { e.preventDefault(); alert(`Enquiry submitted for: ${product?.name}`); onClose(); }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <h3 className="font-serif text-xl">Enquire about {product?.name}</h3>
        <p className="mt-1 text-sm text-slate-600">Share your details and our couture specialist will reach out.</p>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <div>
            <label className="mb-1 block text-xs text-slate-600">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-slate-600">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-600">Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-600">Message</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900" placeholder="Share your occasion, silhouette, budget range, timelines..." />
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
            <button type="submit" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Submit Enquiry</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function HomePage({ onEnquire }) {
  const newArrivals = products.slice(0, 4);
  return (
    <div className="space-y-14">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500">Couture at its Finest</p>
          <h1 className="font-serif text-3xl leading-tight md:text-5xl">Bridal Couture & Designer Ready-to-Wear</h1>
          <p className="mt-3 max-w-xl text-slate-600">Bespoke craftsmanship for wedding gowns, lehengas, sarees, and refined accessories.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/collections" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800">Explore Collections</a>
            <a href="#/contact" className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-900 hover:bg-slate-50">Book an Appointment</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200"><img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="h-full w-full object-cover" /></div>
      </section>

      <section>
        <SectionHeader eyebrow="Featured" title="Signature Collections" action={<a href="#/shop" className="text-sm text-slate-700 hover:text-slate-900">Shop All</a>} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <a href="#/collections" className="group relative overflow-hidden rounded-3xl border border-slate-200">
            <img src="https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop" alt="Aiyana" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 p-4 backdrop-blur">
              <h3 className="font-serif text-xl">Aiyana Collection</h3>
              <p className="text-sm text-slate-600">Contemporary silhouettes, artisanal detailing.</p>
            </div>
          </a>
          <a href="https://www.labelmdesigners.com/collections/thalia-collections" className="group relative overflow-hidden rounded-3xl border border-slate-200">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="Thalia" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 p-4 backdrop-blur">
              <h3 className="font-serif text-xl">Thalia Collection</h3>
              <p className="text-sm text-slate-600">Inspired by grace and modernity.</p>
            </div>
          </a>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Shop by" title="Category" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((c) => (
            <a key={c.key} href={`#/shop?category=${c.key}`} className="group relative overflow-hidden rounded-2xl border border-slate-200">
              <img src={c.image} alt={c.name} className="h-40 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-x-3 bottom-3 rounded-full bg-white/90 px-4 py-1 text-sm text-slate-900">{c.name}</div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Refined Selection" title="New Arrivals" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} p={p} onEnquire={onEnquire} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Flawless bespoke experience. I felt like royalty.", "Exquisite craftsmanship. A true show-stopper!", "Ready-to-wear quality and quick delivery."]
            .map((q, i) => (
              <blockquote key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-2 flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-slate-700">“{q}”</p>
              </blockquote>
            ))}
        </div>
      </section>
    </div>
  );
}

function ShopPage({ onEnquire }) {
  const query = new URLSearchParams((window.location.hash.split('?')[1] || ''));
  const category = query.get('category') || 'all';
  const filtered = useMemo(() => {
    if (category === 'all') return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <div>
      <SectionHeader eyebrow="Shop" title="Explore the Collection" action={
        <div className="hidden gap-2 md:flex">
          <a href="#/shop?category=all" className={`rounded-full border px-3 py-1 text-xs ${category==='all'?'border-slate-900 bg-slate-900 text-white':'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>All</a>
          {categories.map((c) => (
            <a key={c.key} href={`#/shop?category=${c.key}`} className={`rounded-full border px-3 py-1 text-xs ${category===c.key?'border-slate-900 bg-slate-900 text-white':'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>{c.name}</a>
          ))}
        </div>
      } />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} onEnquire={onEnquire} />
        ))}
      </div>
    </div>
  );
}

function ProductPage({ onEnquire }) {
  const id = (window.location.hash.split('/')[2] || '').split('?')[0];
  const p = products.find((x) => x.id === id);
  if (!p) return <p className="text-slate-600">Product not found.</p>;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="space-y-3">
        {p.images.map((src, i) => (
          <img key={i} src={src} alt={`${p.name} ${i+1}`} className="w-full rounded-2xl border border-slate-200 object-cover" />
        ))}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{p.category}</p>
        <h1 className="mt-2 font-serif text-3xl">{p.name}</h1>
        <p className="mt-1 text-slate-700">{p.type === 'couture' ? 'Price on Request' : `$${p.price}`}</p>
        <p className="mt-4 text-slate-600">Handcrafted with couture-level attention to detail and premium textiles. Designed for statement-making occasions.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.type === 'couture' ? (
            <button onClick={() => onEnquire(p)} className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800">Make an Enquiry</button>
          ) : (
            <button onClick={() => alert('Added to cart')} className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-600">Add to Cart</button>
          )}
          <button className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-900 hover:bg-slate-50">Add to Wishlist</button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-4"><p className="text-sm font-medium">Description</p><p className="mt-2 text-sm text-slate-600">Elegant, tailored silhouette crafted by master artisans.</p></div>
          <div className="rounded-2xl border border-slate-200 p-4"><p className="text-sm font-medium">Sizing Guide</p><p className="mt-2 text-sm text-slate-600">Custom fittings available for couture. Standard sizes XS–XL for ready-to-wear.</p></div>
          <div className="rounded-2xl border border-slate-200 p-4"><p className="text-sm font-medium">Shipping & Returns</p><p className="mt-2 text-sm text-slate-600">Couture lead time 6–10 weeks. Ready-to-wear ships in 2–5 days.</p></div>
        </div>
      </div>
    </div>
  );
}

function StoresPage() {
  const stores = [
    { city: 'Mumbai - Kala Ghoda', address: '12, Heritage Lane, Kala Ghoda, Fort, Mumbai 400001', hours: 'Mon–Sun: 11:00 AM – 8:00 PM', phone: '+91 22 1234 5678' },
    { city: 'Delhi - Mehrauli', address: '21, Couture Ave, Mehrauli, New Delhi 110030', hours: 'Tue–Sun: 11:00 AM – 7:00 PM', phone: '+91 11 8765 4321' },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Visit Us" title="Store Locations" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="Store Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609548144!2d72.74109894751704!3d19.08219783958162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f96b7c2e9d%3A0x15b8a1c9c4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-4">
          {stores.map((s) => (
            <div key={s.city} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-900"><MapPin className="h-4 w-4 text-emerald-500" /> {s.city}</div>
              <p className="text-sm text-slate-700">{s.address}</p>
              <p className="mt-1 text-xs text-slate-500">{s.hours}</p>
              <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="mt-2 inline-block text-sm text-emerald-600 hover:text-emerald-700">{s.phone}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RouterView() {
  const route = useHashRoute();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function onEnquire(p) { setSelectedProduct(p); setModalOpen(true); }

  let view = null;
  if (route.startsWith('#/product/')) view = <ProductPage onEnquire={onEnquire} />;
  else if (route.startsWith('#/shop')) view = <ShopPage onEnquire={onEnquire} />;
  else if (route.startsWith('#/stores')) view = <StoresPage />;
  else view = <HomePage onEnquire={onEnquire} />;

  return (
    <>
      {view}
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} product={selectedProduct} />
    </>
  );
}
