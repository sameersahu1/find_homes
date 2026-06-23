import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MessageCircle } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties, categories } from '../data/properties';
import { BUSINESS, waLink } from '../config/business';

export default function Properties() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = properties.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.bhk.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 lg:pt-28">
      {/* Header - editorial */}
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">Browse Listings</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              Properties in <span className="italic font-serif text-rose-400">Noida & Greater Noida</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl text-lg">
              {BUSINESS.tagline}. Verified listings across all categories — fresh bookings, resale, rentals, commercial, and plots.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-stone-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search by name, sector, BHK..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 focus:border-rose-700 focus:bg-white text-sm outline-none transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === 'all' ? 'bg-zinc-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.key ? 'bg-zinc-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-stone-500">
              Showing <span className="font-bold text-zinc-900">{filtered.length}</span> properties
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <Filter className="w-4 h-4" />
              {activeCategory === 'all' ? 'All' : categories.find(c => c.key === activeCategory)?.label}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <PropertyCard property={p} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-stone-200">
              <Search className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-zinc-900">No properties found</h3>
              <p className="text-stone-500 mt-1">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-rose-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-rose-100 mb-6">Let our team find the perfect property for you.</p>
          <a
            href={waLink(`Hi Find Homes, I couldn't find the property I'm looking for. Please help me.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-700 px-8 py-3.5 font-semibold hover:bg-stone-100 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Send Requirements on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
