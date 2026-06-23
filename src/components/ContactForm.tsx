import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, IndianRupee, Home, Loader2, ArrowRight } from 'lucide-react';
import { FORMSPREE_ENDPOINT } from '../config/formspree';
import { BUSINESS, waLink } from '../config/business';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', requirement: '', budget: '', message: '',
  });
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
        body: JSON.stringify({ ...formData, _subject: `New Inquiry from ${formData.name} - Find Homes`, _source: 'Find Homes - Home Page' }),
      });
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) setFormData({ name: '', phone: '', email: '', requirement: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputCls = 'w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 focus:bg-white focus:border-rose-700 focus:ring-1 focus:ring-rose-700 text-sm transition-all outline-none';
  const iconCls = 'absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400';

  return (
    <section className="py-20 lg:py-28 bg-zinc-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-700/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-white"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-rose-500" />
              <span className="text-rose-400 text-xs font-semibold uppercase tracking-[0.3em]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
              Let's Find Your <span className="italic font-serif text-rose-400">Perfect</span> Property
            </h2>
            <p className="text-stone-300 leading-relaxed mb-8">
              Tell us what you're looking for and our experts will get back to you within 24 hours with the best options.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <div className="w-10 h-10 bg-rose-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Call us</p>
                  <p className="font-semibold">{BUSINESS.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                <div className="w-10 h-10 bg-rose-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Email us</p>
                  <p className="font-semibold break-all">{BUSINESS.email}</p>
                </div>
              </div>
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 font-semibold transition-all"
            >
              Prefer WhatsApp? Chat now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 shadow-2xl">
              {status === 'success' && (
                <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm font-medium">
                  ✓ Thank you! Your inquiry has been submitted. We'll contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium">
                  Something went wrong. Please try again or WhatsApp us directly.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Email</label>
                  <div className="relative">
                    <Mail className={iconCls} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" className={inputCls} />
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
                <div className="sm:col-span-2">
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
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2 block">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-stone-400" />
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 focus:bg-white focus:border-rose-700 focus:ring-1 focus:ring-rose-700 text-sm transition-all outline-none resize-none" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full mt-6 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-rose-700 disabled:bg-stone-400 disabled:cursor-not-allowed text-white py-4 font-semibold transition-all"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                ) : (
                  <>Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
