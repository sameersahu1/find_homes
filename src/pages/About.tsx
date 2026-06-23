import { motion } from 'framer-motion';
import { Award, Users, Handshake, TrendingUp, Target, Heart, Phone, Mail, MapPin, Building2, KeyRound, Home as HomeIcon, Shield } from 'lucide-react';
import { BUSINESS, waLink } from '../config/business';

const stats = [
  { icon: Award, value: '13+', label: 'Years of Experience' },
  { icon: Handshake, value: '850+', label: 'Deals Closed' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '15+', label: 'Sectors Covered' },
];

const values = [
  { icon: Target, title: 'Client First', description: 'Every decision is guided by what is best for our clients.' },
  { icon: Heart, title: 'Integrity', description: 'Honest, transparent dealings with no hidden agendas.' },
  { icon: Award, title: 'Excellence', description: 'Premium service quality at every step of the journey.' },
];

export default function About() {
  return (
    <main className="pt-20 lg:pt-28">
      {/* Header */}
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">Who We Are</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              About <span className="italic font-serif text-rose-400">{BUSINESS.name}</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl text-lg">
              {BUSINESS.tagline}. Fresh booking specialists with deep roots in NCR real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="absolute inset-0 bg-rose-700 translate-x-4 translate-y-4" />
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="Find Homes" className="relative w-full h-auto object-cover grayscale-[10%]" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-rose-700" />
                <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">Our Story</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Built on <span className="italic font-serif text-rose-700">trust</span>, driven by results.
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {BUSINESS.name} is a trusted name in Noida & Greater Noida real estate, specializing in
                <strong className="text-zinc-900"> fresh bookings, sales, and rentals</strong>.
              </p>
              <p className="text-stone-600 leading-relaxed">
                As fresh booking specialists, we have direct tie-ups with leading developers across the region — giving our clients access to pre-launch prices, priority allotments, and exclusive deals.
              </p>
              <p className="text-stone-600 leading-relaxed">
                From your first site visit to final documentation, we stand by you at every step.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="text-center p-4 bg-rose-50 border border-rose-100">
                  <KeyRound className="w-6 h-6 text-rose-700 mx-auto mb-2" />
                  <p className="text-xs font-bold text-zinc-900">Fresh Booking</p>
                </div>
                <div className="text-center p-4 bg-stone-50 border border-stone-200">
                  <HomeIcon className="w-6 h-6 text-zinc-900 mx-auto mb-2" />
                  <p className="text-xs font-bold text-zinc-900">Sales</p>
                </div>
                <div className="text-center p-4 bg-zinc-900">
                  <Building2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-xs font-bold text-white">Rentals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rose-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                  <Icon className="w-8 h-8 text-rose-200 mx-auto mb-3" />
                  <div className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-rose-100 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-rose-700" />
              <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">Our Principles</span>
              <div className="w-12 h-[2px] bg-rose-700" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
              Our Core <span className="italic font-serif text-rose-700">Values</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0 border border-stone-200">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`p-10 bg-white hover:bg-rose-700 group transition-all duration-300 ${index < 2 ? 'md:border-r border-stone-200' : ''}`}>
                  <div className="w-14 h-14 bg-stone-100 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-7 h-7 text-rose-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-white text-xl mb-3 transition-colors">{value.title}</h3>
                  <p className="text-stone-600 group-hover:text-rose-100 leading-relaxed transition-colors">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-[2px] bg-rose-700" />
                <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">Why Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-8">
                Why Choose <span className="italic font-serif text-rose-700">{BUSINESS.name}</span>?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Fresh Booking Specialists', desc: 'Direct developer tie-ups give you pre-launch access across Noida & Greater Noida.' },
                  { title: 'Verified Properties', desc: 'Every listing is thoroughly vetted for legal compliance and market value.' },
                  { title: 'Local Market Expertise', desc: 'Deep knowledge of sectors, pricing trends, and upcoming developments.' },
                  { title: 'End-to-End Documentation', desc: 'From initial paperwork to final registration — handled seamlessly.' },
                  { title: 'Transparent Dealings', desc: 'No hidden charges. Complete transparency in every transaction.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="text-4xl font-bold text-stone-200 font-serif">0{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-lg">{item.title}</h4>
                      <p className="text-stone-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-zinc-900 text-white p-8 lg:p-10">
              <Shield className="w-10 h-10 text-rose-400 mb-5" />
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">Phone</p>
                    <p className="font-semibold mt-1">{BUSINESS.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">Email</p>
                    <p className="font-semibold mt-1 break-all">{BUSINESS.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">Office</p>
                    <p className="font-semibold mt-1">{BUSINESS.address.line1}<br />{BUSINESS.address.line2}</p>
                  </div>
                </div>
              </div>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block w-full mt-8 bg-rose-700 hover:bg-rose-800 text-white text-center py-3 font-semibold transition-colors">
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
