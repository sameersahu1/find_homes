import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, User, Home, IndianRupee, Loader2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../config/formspree';
import { BUSINESS, waLink } from '../config/business';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', requirement: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `New Inquiry from ${formData.name} - Find Homes`, _source: 'Contact Page' }),
      });
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) setFormData({ name: '', phone: '', requirement: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputCls = 'w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 focus:bg-white focus:border-rose-700 focus:ring-1 focus:ring-rose-700 text-sm transition-all outline-none';
  const iconCls = 'absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400';

  return (
    <main className="pt-20 lg:pt-28">
      {/* Header */}
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">Reach Out</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
              Let's <span className="italic font-serif text-rose-400">Connect</span>
            </h1>
            <p className="text-stone-400 mt-5 max-w-2xl text-lg">
              Have a question or looking for a property? We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-200">
            {[
              { icon: Phone, title: 'Phone', lines: [BUSINESS.phoneDisplay], action: `tel:+91${BUSINESS.phone}`, actionLabel: 'Call Now' },
              { icon: MessageCircle, title: 'WhatsApp', lines: [BUSINESS.phoneDisplay], action: waLink(), actionLabel: 'Chat on WhatsApp' },
              { icon: Mail, title: 'Email', lines: [BUSINESS.email], action: `mailto:${BUSINESS.email}`, actionLabel: 'Send Email' },
              { icon: Clock, title: 'Hours', lines: ['Mon-Sat: 9:30 AM - 7:00 PM', 'Sun: 10:00 AM - 2:00 PM'], action: null, actionLabel: null },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-8 hover:bg-rose-700 group transition-all duration-300"
                  style={{
                    borderRight: index < 3 ? '1px solid #e7e5e4' : undefined,
                  }}
                >
                  <div className="w-12 h-12 bg-stone-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-rose-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-zinc-900 group-hover:text-white mb-3 text-lg transition-colors">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-stone-600 group-hover:text-rose-100 break-all transition-colors">{line}</p>
                  ))}
                  {item.action && (
                    <a
                      href={item.action}
                      target={item.action.startsWith('http') ? '_blank' : undefined}
                      rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-rose-700 group-hover:text-white transition-colors"
                    >
                      {item.actionLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-full min-h-[500px]">
              <div className="absolute inset-0 bg-rose-700 translate-x-4 translate-y-4" />
              <div className="relative h-full overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps?q=Urbtech+NPX+Sector+153+Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${BUSINESS.name} Office Location`}
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white p-8 lg:p-10 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-[2px] bg-rose-700" />
                  <span className="text-rose-700 text-xs font-semibold uppercase tracking-[0.3em]">Send Inquiry</span>
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">Get in Touch</h2>
                <p className="text-stone-500 text-sm mb-6">Our expert will contact you within 24 hours.</p>

                {status === 'success' && <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm font-medium">✓ Thank you! Your inquiry has been submitted.</div>}
                {status === 'error' && <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium">Something went wrong. Please try again.</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Full Name *</label>
                    <div className="relative">
                      <User className={iconCls} />
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Phone *</label>
                    <div className="relative">
                      <Phone className={iconCls} />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder={BUSINESS.phoneDisplayShort} className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Requirement *</label>
                    <div className="relative">
                      <Home className={iconCls} />
                      <select name="requirement" required value={formData.requirement} onChange={handleChange} className={inputCls}>
                        <option value="">Select</option>
                        <option value="fresh-booking">Fresh Booking</option>
                        <option value="buy">Buy Property</option>
                        <option value="sell">Sell Property</option>
                        <option value="rent">Rent Property</option>
                        <option value="commercial">Commercial</option>
                        <option value="plot">Plot / Land</option>
                        <option value="investment">Investment</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Budget</label>
                    <div className="relative">
                      <IndianRupee className={iconCls} />
                      <select name="budget" value={formData.budget} onChange={handleChange} className={inputCls}>
                        <option value="">Select budget range</option>
                        <option value="50l">Up to 50 Lakhs</option>
                        <option value="50l-1cr">50 Lakhs - 1 Crore</option>
                        <option value="1-2cr">1 - 2 Crores</option>
                        <option value="2-3cr">2 - 3 Crores</option>
                        <option value="3cr+">Above 3 Crores</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:bg-white focus:border-rose-700 focus:ring-1 focus:ring-rose-700 text-sm transition-all outline-none resize-none" />
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="group w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-rose-700 disabled:bg-stone-400 disabled:cursor-not-allowed text-white py-4 font-semibold transition-all">
                    {status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : <>Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-900 p-10 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-700/20 rounded-full blur-3xl" />
            <div className="relative">
              <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-5" />
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-[2px] bg-rose-500" />
                  <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">Visit Our Office</span>
                  <div className="w-12 h-[2px] bg-rose-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{BUSINESS.address.line1}</h2>
              <p className="text-stone-400 text-lg">{BUSINESS.address.line2}</p>
              <p className="text-stone-500 text-sm mt-2">Landmark: {BUSINESS.address.landmark}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 font-semibold mt-8 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
