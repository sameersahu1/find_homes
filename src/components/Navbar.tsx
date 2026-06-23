import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Home, Building2, Briefcase, Users, Contact, Shield } from 'lucide-react';
import { BUSINESS, waLink } from '../config/business';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/properties', label: 'Properties', icon: Building2 },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/about', label: 'About', icon: Users },
  { path: '/contact', label: 'Contact', icon: Contact },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg border-b border-stone-200' : 'bg-zinc-900/90 backdrop-blur-md'
      }`}
    >
      {/* Top Info Bar - desktop only */}
      <div
        className={`hidden lg:block text-xs transition-all duration-300 ${
          scrolled ? 'bg-zinc-900 text-stone-300' : 'bg-black/40 text-stone-300'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-rose-400" />
              {BUSINESS.phoneDisplay}
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-rose-400" />
              Fresh Booking Specialists
            </span>
          </div>
          <span className="text-stone-400">{BUSINESS.email}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })}>
            <div className="relative">
              <div className="w-11 h-11 rounded-sm bg-rose-700 flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-zinc-900 rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold leading-tight tracking-tight ${
                  scrolled ? 'text-zinc-900' : 'text-white'
                }`}
              >
                {BUSINESS.name}
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] font-medium ${
                  scrolled ? 'text-rose-700' : 'text-rose-300'
                }`}
              >
                Noida & Greater Noida
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })}
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? scrolled
                        ? 'text-rose-700'
                        : 'text-white'
                      : scrolled
                      ? 'text-stone-600 hover:text-rose-700'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-rose-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:+91${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-zinc-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 border-l-2 border-rose-700'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 space-y-2">
              <a
                href={`tel:+91${BUSINESS.phone}`}
                className="flex items-center justify-center gap-3 px-4 py-3 bg-rose-700 text-white text-sm font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call: {BUSINESS.phoneDisplayShort}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900 text-white text-sm font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
