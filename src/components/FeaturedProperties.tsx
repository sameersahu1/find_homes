import { motion } from 'framer-motion';
import { ArrowRight, MapPin, BedDouble, Maximize, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { waLink } from '../config/business';

export default function FeaturedProperties() {
  const [featured, ...rest] = properties.slice(0, 5);
  const secondary = rest.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-rose-700" />
              <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">
                Featured Listings
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-tight">
              Handpicked <span className="italic font-serif text-rose-700">Properties</span>
              <br />
              For You.
            </h2>
          </div>
          <p className="text-stone-600 max-w-md lg:text-right">
            Every property is verified, documented, and ready for you. From fresh bookings to resale gems.
          </p>
        </motion.div>

        {/* Bento Grid - Large + Small */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 group relative bg-zinc-900 overflow-hidden min-h-[500px]"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

            {/* Badges */}
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-rose-700 text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                Featured
              </span>
              <span className="bg-white/90 text-zinc-900 text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                {featured.category.replace('-', ' ')}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <div className="flex items-center gap-2 text-rose-300 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                {featured.sector}, Noida
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-stone-300 max-w-xl mb-6">{featured.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Price</p>
                  <p className="text-2xl font-bold text-rose-400">{featured.price}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4" /> {featured.bhk}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4" /> {featured.area}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/properties"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-stone-100 px-6 py-3 font-semibold transition-all"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={waLink(`Hi, I'm interested in ${featured.title} at ${featured.sector}. Price: ${featured.price}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 font-semibold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
          {secondary.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-stone-200 hover:border-rose-700/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-zinc-900 text-white text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                    {property.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-stone-500 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  {property.sector}, Noida
                </div>
                <h4 className="font-bold text-zinc-900 text-lg mb-2 group-hover:text-rose-700 transition-colors leading-tight">
                  {property.title}
                </h4>
                <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                  <span>{property.bhk}</span>
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <span className="font-bold text-rose-700 text-lg">{property.price}</span>
                  <a
                    href={waLink(`Interested in ${property.title} at ${property.sector}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-zinc-900 hover:bg-rose-700 text-white flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            to="/properties"
            className="group inline-flex items-center gap-3 bg-zinc-900 hover:bg-rose-700 text-white px-10 py-4 font-semibold transition-all"
          >
            Browse All Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
