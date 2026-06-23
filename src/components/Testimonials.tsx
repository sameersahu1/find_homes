import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-rose-700" />
            <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-rose-700" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-zinc-900 tracking-tight">
            Stories From Our <span className="italic font-serif text-rose-700">Clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border border-stone-200 p-8 hover:border-rose-700/40 hover:shadow-xl transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-rose-700/20 mb-4 group-hover:text-rose-700/40 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-rose-600 text-sm">★</span>
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-zinc-900">{t.name}</h4>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
