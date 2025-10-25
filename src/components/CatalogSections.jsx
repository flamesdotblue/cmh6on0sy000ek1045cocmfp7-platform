import React, { useMemo, useState } from 'react';
import { Heart, ArrowRight, MapPin, Star } from 'lucide-react';

const featuredCollections = [
  {
    name: 'Aiyana Collection',
    image: 'https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop',
    href: '#collections',
  },
  {
    name: 'Thalia Collection',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    href: 'https://www.labelmdesigners.com/collections/thalia-collections',
  },
];

const categories = [
  { name: 'Wedding Gowns', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1400&auto=format&fit=crop', href: '#shop' },
  { name: 'Bridal Lehengas', image: 'https://images.unsplash.com/photo-1603503367494-88d05ed1d634?q=80&w=1400&auto=format&fit=crop', href: '#shop' },
  { name: 'Bridal Sarees', image: 'https://images.unsplash.com/photo-1516627145497-ae3f4e55bad6?q=80&w=1400&auto=format&fit=crop', href: '#shop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop', href: '#shop' },
];

const newArrivalsData = [
  { id: 1, name: 'Ivory Silk Bridal Gown', price: 2999, type: 'couture', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop', color: 'Ivory', occasion: 'Wedding' },
  { id: 2, name: 'Emerald Lehenga Set', price: 1899, type: 'couture', image: 'https://images.unsplash.com/photo-1577955138382-07c15f148ca1?q=80&w=1400&auto=format&fit=crop', color: 'Emerald', occasion: 'Festive' },
  { id: 3, name: 'Pearl Choker', price: 220, type: 'ready', image: 'https://images.unsplash.com/photo-1504653601220-f1a8f2d615b9?q=80&w=1400&auto=format&fit=crop', color: 'Pearl', occasion: 'Evening' },
  { id: 4, name: 'Gold Clutch', price: 140, type: 'ready', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1400&auto=format&fit=crop', color: 'Gold', occasion: 'Party' },
  { id: 5, name: 'Hand-Embroidered Saree', price: 1299, type: 'couture', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1400&auto=format&fit=crop', color: 'Crimson', occasion: 'Wedding' },
];

const testimonials = [
  {
    quote:
      'The bespoke experience was flawless from consultation to final fitting. I felt like royalty on my big day.',
    name: 'Ananya Sharma',
  },
  {
    quote:
      'Exquisite craftsmanship and attention to detail. The lehenga was a show-stopper!',
    name: 'Kavya Mehta',
  },
  {
    quote:
      'Ready-to-wear pieces were delivered quickly and the quality is outstanding.',
    name: 'Priya Kapoor',
  },
];

const celebrities = [
  {
    name: 'Celebrity Muse',
    image: 'https://images.unsplash.com/photo-1563170452-a8c4a08fa2bd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Runway Icon',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a42?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Style Star',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
  },
];

const instagram = [
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504198266285-165a8dd8023e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515118031247-8bd2b2e52e9f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
];

const stores = [
  {
    city: 'Mumbai - Kala Ghoda',
    address: '12, Heritage Lane, Kala Ghoda, Fort, Mumbai 400001',
    hours: 'Mon–Sun: 11:00 AM – 8:00 PM',
    phone: '+91 22 1234 5678',
  },
  {
    city: 'Delhi - Mehrauli',
    address: '21, Couture Ave, Mehrauli, New Delhi 110030',
    hours: 'Tue–Sun: 11:00 AM – 7:00 PM',
    phone: '+91 11 8765 4321',
  },
];

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-emerald-300/80">{eyebrow}</p>
        )}
        <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

function ProductCard({ product, onEnquire }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between opacity-0 transition group-hover:opacity-100">
          <span className="text-xs text-gray-200">{product.occasion}</span>
          <span className="text-xs text-gray-200">{product.color}</span>
        </div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-sm text-white">{product.name}</h3>
        <p className="text-xs text-gray-300">
          {product.type === 'couture' ? 'Price on Request' : `$${product.price}`}
        </p>
        <div className="mt-3 flex gap-2">
          {product.type === 'couture' ? (
            <button
              onClick={() => onEnquire(product)}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-gray-200"
            >
              Make an Enquiry
            </button>
          ) : (
            <button
              onClick={() => alert('Added to cart')}
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-600"
            >
              Add to Cart
            </button>
          )}
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:bg-white/10">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}

function EnquiryModal({ open, onClose, product }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    // In production: send to backend/CRM
    alert(`Enquiry submitted for: ${product?.name}`);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
        <h3 className="font-serif text-xl text-white">Enquire about {product?.name}</h3>
        <p className="mt-1 text-sm text-gray-300">Share your details and our couture specialist will be in touch shortly.</p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label className="mb-1 block text-xs text-gray-300">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-gray-300">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-300">Phone</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-300">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
              placeholder="Share your occasion, preferred silhouette, budget range, timelines..."
            />
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CatalogSections() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filters = useMemo(() => ({ category: 'All', price: 'All', color: 'All', occasion: 'All' }), []);

  function handleEnquire(product) {
    setSelectedProduct(product);
    setModalOpen(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      {/* Featured Collections */}
      <section id="collections" className="py-8">
        <SectionHeader
          eyebrow="Featured"
          title="Signature Collections"
          action={
            <a href="#shop" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              Shop All <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredCollections.map((col) => (
            <a key={col.name} href={col.href} className="group relative overflow-hidden rounded-2xl">
              <img
                src={col.image}
                alt={col.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl">{col.name}</h3>
                <p className="mt-1 text-sm text-gray-300">Explore the latest silhouettes and artisanal details.</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section id="shop" className="py-8">
        <SectionHeader eyebrow="Shop by" title="Category" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <a key={cat.name} href={cat.href} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={cat.image} alt={cat.name} className="h-40 w-full object-cover transition group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm">{cat.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Category + Filters Preview */}
      <section id="category-listing" className="py-8">
        <SectionHeader
          eyebrow="Refined Selection"
          title="New Arrivals"
          action={
            <div className="hidden gap-3 md:flex">
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">Category: {filters.category}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">Price: {filters.price}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">Color: {filters.color}</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">Occasion: {filters.occasion}</span>
            </div>
          }
        />
        <div id="new-arrivals" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivalsData.map((p) => (
            <ProductCard key={p.id} product={p} onEnquire={handleEnquire} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            alt="Studio"
            className="h-64 w-full rounded-2xl object-cover md:h-full"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <SectionHeader eyebrow="Our Story" title="Artistry, Tailored to You" />
            <p className="text-gray-300">
              Rooted in timeless elegance, our atelier celebrates craftsmanship through hand-embroidery, rare textiles, and contemporary silhouettes. Each couture piece is a collaboration between designer and muse—crafted to your measure, your story, your moment.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
              Know More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Celebrity Corner */}
      <section id="celebrity" className="py-8">
        <SectionHeader eyebrow="Celebrity Corner" title="Spotted In Aiyana" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {celebrities.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={c.image} alt={c.name} className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h4 className="text-sm">{c.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-1 text-emerald-300">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-gray-200">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-gray-400">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section id="instagram" className="py-8">
        <SectionHeader eyebrow="Follow Us" title="Instagram" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
          {instagram.map((src, i) => (
            <a key={i} href="#" className="group relative block overflow-hidden rounded-lg">
              <img src={src} alt={`Instagram ${i + 1}`} className="aspect-square w-full object-cover transition group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
            </a>
          ))}
        </div>
      </section>

      {/* Store Locations */}
      <section id="stores" className="py-12">
        <SectionHeader eyebrow="Visit Us" title="Store Locations" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-white/10">
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
              <div key={s.city} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-emerald-300" /> {s.city}
                </div>
                <p className="text-sm text-gray-300">{s.address}</p>
                <p className="mt-1 text-xs text-gray-400">{s.hours}</p>
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="mt-2 inline-block text-sm text-emerald-300 hover:text-emerald-200">
                  {s.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center">
          <h3 className="font-serif text-2xl">Ready to begin your couture journey?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-300">
            Book a private consultation with our designers or send us a message about your dream outfit. We respond within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@aiyana.design" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200">
              Email Us
            </a>
            <a href="tel:+15551234567" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10">
              Call Boutique
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} product={selectedProduct} />
    </div>
  );
}
