import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, FileCheck, Handshake, Award, Check } from 'lucide-react';
import { BUSINESS } from '../config/business';

const features = [
  { icon: Clock, title: '13+ Years Experience', desc: 'Over a decade of real estate expertise in Noida & Greater Noida market.' },
  { icon: ShieldCheck, title: 'Verified Properties', desc: 'Every property is thoroughly vetted for legal clarity and documentation.' },
  { icon: MapPin, title: 'Local Market Expertise', desc: 'Deep understanding of sectors, pricing trends, and upcoming developments.' },
  { icon: FileCheck, title: 'End-to-End Documentation', desc: 'Complete assistance with paperwork, registrations, and legal formalities.' },
  { icon: Handshake, title: 'Transparent Dealings', desc: 'No hidden charges. Complete transparency in every transaction.' },
  { icon: Award, title: 'Fresh Booking Specialists', desc: 'Direct developer tie-ups for pre-launch prices and exclusive deals.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop"
                    alt="Property consultation"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
                <div className="bg-rose-700 text-white p-6">
                  <p className="text-5xl font-bold">850+</p>
                  <p className="text-sm uppercase tracking-wider mt-1 text-rose-200">Deals Closed</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-zinc-900 text-white p-6">
                  <p className="text-5xl font-bold">500+</p>
                  <p className="text-sm uppercase tracking-wider mt-1 text-stone-400">Happy Families</p>
                </div>
                <div className="overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=800&fit=crop"
                    alt="Modern building"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-700" />
              <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-5">
              Trusted by <span className="italic font-serif text-rose-700">hundreds</span> of families.
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
              At {BUSINESS.name}, we combine deep local market knowledge with professional integrity to deliver
              exceptional real estate services across Noida & Greater Noida.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex gap-3 group"
                  >
                    <div className="w-10 h-10 shrink-0 bg-stone-100 group-hover:bg-rose-700 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-rose-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 p-5 bg-stone-50 border-l-4 border-rose-700">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-rose-700 mt-0.5 shrink-0" />
                <p className="text-sm text-stone-700">
                  <strong className="text-zinc-900">Our promise:</strong> Every client gets personalized attention,
                  transparent pricing, and end-to-end support — from first site visit to final registration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
