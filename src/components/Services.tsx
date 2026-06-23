import { motion } from 'framer-motion';
import { ShoppingCart, Tag, KeyRound, FileText, CalendarDays, TrendingUp, Scale, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: CalendarDays, title: 'Fresh Booking', desc: 'Be the first to book newly launched projects at pre-launch prices with exclusive developer deals.', featured: true },
  { icon: ShoppingCart, title: 'Buy Property', desc: 'Find your dream home or investment with verified listings across Noida & Greater Noida.' },
  { icon: Tag, title: 'Sell Property', desc: 'Get the best market value with our strategic selling approach and genuine buyer network.' },
  { icon: KeyRound, title: 'Rent Property', desc: 'Wide range of rental options from budget-friendly to luxury apartments and offices.' },
  { icon: FileText, title: 'Property Documentation', desc: 'Complete documentation support including sale deeds, registration, NOCs, and legal verification.' },
  { icon: TrendingUp, title: 'Investment Consultation', desc: 'Strategic investment advice to maximize your returns with data-driven market analysis.' },
  { icon: Scale, title: 'Property Valuation', desc: 'Accurate assessment of your property\'s market value with certified valuation reports.' },
  { icon: Store, title: 'Commercial Leasing', desc: 'End-to-end commercial leasing for offices, retail shops, warehouses, and industrial spaces.' },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-rose-700" />
            <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">
              What We Offer
            </span>
            <div className="w-12 h-[2px] bg-rose-700" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-zinc-900 tracking-tight">
            Services Built Around <span className="italic font-serif text-rose-700">You</span>
          </h2>
          <p className="text-stone-600 mt-5 max-w-2xl mx-auto text-lg">
            From fresh bookings to property investment — we cover every aspect of your real estate journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-200">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group relative p-8 border-stone-200 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-zinc-900 text-white hover:bg-rose-700'
                    : 'bg-white hover:bg-stone-50'
                } ${index < 4 ? 'lg:border-b' : ''} ${
                  (index + 1) % 4 !== 0 ? 'lg:border-r' : ''
                } ${index >= 4 && index < 6 ? 'md:border-b md:border-r' : ''}`}
              >
                {isFeatured && (
                  <span className="absolute top-4 right-4 text-[10px] bg-rose-600 text-white px-2 py-0.5 uppercase tracking-wider font-semibold">
                    Specialty
                  </span>
                )}
                <div
                  className={`w-12 h-12 flex items-center justify-center mb-5 transition-colors ${
                    isFeatured ? 'bg-white/10 group-hover:bg-white/20' : 'bg-stone-100 group-hover:bg-rose-700'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      isFeatured ? 'text-rose-300 group-hover:text-white' : 'text-rose-700 group-hover:text-white'
                    }`}
                  />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isFeatured ? 'text-white' : 'text-zinc-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isFeatured ? 'text-stone-300' : 'text-stone-600'}`}>
                  {service.desc}
                </p>
                <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                  isFeatured ? 'text-white' : 'text-rose-700 group-hover:gap-3'
                }`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 font-semibold"
          >
            Explore all services in detail <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
