import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  { name: 'Sector 82', region: 'Noida', count: 45 },
  { name: 'Sector 93', region: 'Noida', count: 62 },
  { name: 'Sector 93A', region: 'Noida', count: 38 },
  { name: 'Sector 104', region: 'Noida', count: 55 },
  { name: 'Sector 108', region: 'Noida', count: 41 },
  { name: 'Sector 128', region: 'Noida', count: 73 },
  { name: 'Sector 135', region: 'Noida', count: 34 },
  { name: 'Sector 150', region: 'Noida', count: 29 },
  { name: 'Sector 153', region: 'Noida', count: 32 },
  { name: 'Greater Noida West', region: 'Greater Noida', count: 68 },
  { name: 'Pari Chowk', region: 'Greater Noida', count: 45 },
  { name: 'Yamuna Expressway', region: 'Greater Noida', count: 52 },
];

export default function AreasWeServe() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">
                Our Coverage
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Areas We <span className="italic font-serif text-rose-400">Serve</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-md lg:text-right">
            From Noida's established sectors to Greater Noida's emerging hotspots — we cover it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border border-white/10">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group relative p-6 border-white/10 hover:bg-rose-700 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="w-5 h-5 text-rose-400 group-hover:text-white transition-colors" />
                  <span className="text-[10px] text-stone-500 group-hover:text-rose-200 uppercase tracking-wider font-medium">
                    {sector.region}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3 leading-tight">
                  {sector.name}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-xs text-stone-400 group-hover:text-white">
                    {sector.count}+ properties
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-8 py-3.5 font-semibold transition-all"
          >
            Browse Properties in All Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
