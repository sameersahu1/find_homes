import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, ArrowUp, MessageCircle, Shield } from 'lucide-react';
import { BUSINESS, waLink } from '../config/business';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-zinc-950 text-stone-400">
      {/* Top strip */}
      <div className="bg-rose-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white">
          <span className="flex items-center gap-2 font-semibold">
            <Shield className="w-4 h-4" />
            {BUSINESS.tagline}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3" onClick={scrollToTop}>
              <div className="w-11 h-11 bg-rose-700 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{BUSINESS.name}</h3>
                <p className="text-[10px] text-rose-400 uppercase tracking-[0.2em]">Fresh Booking Specialists</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted property partner with verified listings across Noida & Greater Noida.
              Specializing in fresh bookings, sales, and rentals with end-to-end documentation support.
            </p>
            <div className="flex gap-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-rose-700 border border-white/10 flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a href={`tel:+91${BUSINESS.phone}`} className="w-10 h-10 bg-white/5 hover:bg-rose-700 border border-white/10 flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="w-10 h-10 bg-white/5 hover:bg-rose-700 border border-white/10 flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Properties', path: '/properties' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-rose-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Fresh Booking</li>
              <li>Buy Property</li>
              <li>Sell Property</li>
              <li>Rent Property</li>
              <li>Property Documentation</li>
              <li>Investment Consultation</li>
              <li>Property Valuation</li>
              <li>Commercial Leasing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-rose-500 shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-semibold">{BUSINESS.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-rose-500 shrink-0" />
                <span className="text-sm break-all">{BUSINESS.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-rose-500 shrink-0" />
                <span className="text-sm">
                  {BUSINESS.address.line1}<br />
                  {BUSINESS.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Noida & Greater Noida.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacy-policy" className="hover:text-rose-400 transition-colors">
              Privacy Policy
            </Link>
            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-rose-400 transition-colors">
              Back to top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
