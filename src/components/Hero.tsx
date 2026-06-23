import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Check, KeyRound, Home as HomeIcon, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, waLink } from '../config/business';

export default function Hero() {
  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Top decorative bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left - Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-rose-600" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">
                Since 2012 · Trusted by 500+ Families
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Find Your
                <br />
                <span className="text-rose-500 italic font-serif">Perfect</span>
                <br />
                Home.
              </h1>
              <p className="text-lg lg:text-xl text-stone-300 max-w-xl leading-relaxed font-light">
                Fresh booking specialists for <span className="text-white font-medium">Noida & Greater Noida</span>.
                Sales, renting, and exclusive pre-launch deals — all under one roof.
              </p>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: KeyRound, label: 'Fresh Booking' },
                { icon: HomeIcon, label: 'Residential' },
                { icon: Building, label: 'Commercial' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-stone-200 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-rose-400" />
                    {s.label}
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-7 py-4 font-semibold transition-all shadow-xl shadow-rose-900/40"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:+91${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-stone-100 px-7 py-4 font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phoneDisplayShort}
              </a>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-stone-400">
              {['Verified Properties', 'Transparent Dealings', 'Free Consultation'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-rose-700/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-rose-400" />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative h-[500px] lg:h-[600px]"
          >
            {/* Background accent shape */}
            <div className="absolute inset-0 bg-rose-700/10 rounded-none translate-x-4 translate-y-4" />

            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=1100&fit=crop"
                alt="Luxury property"
                className="w-full h-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-5 w-56"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-rose-700 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-900 leading-none">850+</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">Deals Closed</p>
                </div>
              </div>
              <div className="border-t border-stone-200 pt-3">
                <p className="text-xs text-stone-500">Happy clients across</p>
                <p className="text-sm font-semibold text-zinc-900">Noida & Greater Noida</p>
              </div>
            </motion.div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 -right-4 bg-zinc-900 border border-rose-700/30 text-white p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rose-400">★</span>
                  ))}
                </div>
                <span className="text-xs text-stone-400">4.9/5</span>
              </div>
              <p className="text-xs text-stone-300">Trusted by families</p>
              <p className="text-xs text-stone-300">across NCR</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-10"
        >
          {[
            { value: '13+', label: 'Years of Trust', sub: 'In real estate' },
            { value: '850+', label: 'Deals Closed', sub: 'And counting' },
            { value: '500+', label: 'Happy Families', sub: 'Homeowners' },
            { value: '15+', label: 'Sectors Covered', sub: 'Noida & Greater Noida' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`${i !== 0 ? 'lg:border-l border-white/10' : ''} px-4 lg:px-8 first:pl-0`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-stone-200">{stat.label}</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-rose-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Fresh Booking Open
          </span>
          <span className="hidden sm:inline text-rose-200">•</span>
          <Link to="/properties" className="hover:underline font-medium">
            Browse Properties →
          </Link>
          <span className="hidden sm:inline text-rose-200">•</span>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
            Get a Callback →
          </a>
        </div>
      </div>
    </section>
  );
}
