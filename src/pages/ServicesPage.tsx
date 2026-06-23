import { motion } from 'framer-motion';
import { ShoppingCart, Tag, KeyRound, FileText, CalendarDays, TrendingUp, Scale, Store, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, waLink } from '../config/business';

const services = [
  { icon: CalendarDays, title: 'Fresh Booking', desc: 'Be among the first to book newly launched projects at pre-launch prices. Our flagship service with exclusive developer tie-ups.', features: ['Pre-launch access', 'Developer tie-ups', 'Exclusive discounts', 'Priority allotment'], featured: true },
  { icon: ShoppingCart, title: 'Buy Property', desc: 'Find your dream home with our expert guidance and verified listings.', features: ['Verified listings', 'Site visits', 'Negotiation', 'Legal check'] },
  { icon: Tag, title: 'Sell Property', desc: 'Get the best market value with our strategic selling approach.', features: ['Free valuation', 'Marketing', 'Buyer screening', 'Negotiation'] },
  { icon: KeyRound, title: 'Rent Property', desc: 'Wide range of rental options with tenant verification support.', features: ['Tenant screening', 'Agreements', 'Inspection', 'Collection'] },
  { icon: FileText, title: 'Documentation', desc: 'Complete legal paperwork handling from start to finish.', features: ['Sale deeds', 'Registration', 'NOCs', 'Mutation'] },
  { icon: TrendingUp, title: 'Investment Advice', desc: 'Data-driven strategies to maximize your property returns.', features: ['Market analysis', 'ROI projections', 'Diversification', 'Exit planning'] },
  { icon: Scale, title: 'Valuation', desc: 'Accurate assessment of your property\'s market value.', features: ['Comparative analysis', 'Location check', 'Amenity eval', 'Certified report'] },
  { icon: Store, title: 'Commercial Leasing', desc: 'End-to-end leasing solutions for offices, retail, and warehouses.', features: ['Office space', 'Retail rental', 'Warehouses', 'Lease negotiation'] },
];

export default function ServicesPage() {
  return (
    <main className="pt-20 lg:pt-28">
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">What We Offer</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              Services Built Around <span className="italic font-serif text-rose-400">You</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl text-lg">
              {BUSINESS.tagline}. Comprehensive real estate solutions for your journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 flex items-center justify-center mb-5 ${isFeatured ? 'bg-rose-700' : 'bg-stone-100'}`}>
                    <Icon className={`w-7 h-7 ${isFeatured ? 'text-white' : 'text-rose-700'}`} />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900">{service.title}</h2>
                    {isFeatured && <span className="text-[10px] bg-rose-700 text-white px-3 py-1 uppercase tracking-wider font-semibold">Specialty</span>}
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6 text-lg">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`p-8 lg:p-10 ${isFeatured ? 'bg-rose-700' : 'bg-stone-50'} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <div key={f} className={`p-5 text-center ${isFeatured ? 'bg-white/10 border border-white/20' : 'bg-white border border-stone-200'}`}>
                        <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center text-sm font-bold ${isFeatured ? 'bg-white text-rose-700' : 'bg-rose-700 text-white'}`}>
                          {i + 1}
                        </div>
                        <p className={`text-sm font-medium ${isFeatured ? 'text-white' : 'text-zinc-900'}`}>{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-rose-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-rose-100 mb-8">Contact our team for a free consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-rose-700 px-8 py-3.5 font-semibold hover:bg-stone-100 transition-all">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-black text-white px-8 py-3.5 font-semibold transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
