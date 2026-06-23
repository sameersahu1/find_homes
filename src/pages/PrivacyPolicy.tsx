import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Cookie, UserCheck, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

export default function PrivacyPolicy() {
  const lastUpdated = 'January 2026';

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-rose-700/20 border border-rose-700/30 text-rose-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mt-2">Privacy Policy</h1>
            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
              At {BUSINESS.name}, we respect your privacy and are committed to protecting your personal data.
              Last updated: {lastUpdated}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 lg:p-12 space-y-10"
          >
            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Introduction
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Welcome to {BUSINESS.name} ("we", "us", or "our"). This Privacy Policy describes how we
                collect, use, disclose, and safeguard your information when you visit our website or
                engage with our real estate services in Noida and Greater Noida. Please read this policy
                carefully. By accessing or using our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                <UserCheck className="w-6 h-6 text-rose-700" />
                Information We Collect
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-3">
                {[
                  { title: 'Personal Identification', desc: 'Name, phone number, email address, and any other details you submit through our inquiry forms.' },
                  { title: 'Property Preferences', desc: 'Your property requirements, budget range, preferred locations, and BHK preferences.' },
                  { title: 'Communication Data', desc: 'Any messages, questions, or feedback you send via our contact forms or WhatsApp.' },
                  { title: 'Usage Data', desc: 'Information about how you interact with our website, including pages visited and features used.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-2 h-2 rounded-full bg-rose-700 mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-stone-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Use */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                <Eye className="w-6 h-6 text-rose-700" />
                How We Use Your Information
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Respond to your property inquiries and requests',
                  'Match you with suitable properties in Noida & Greater Noida',
                  'Send you fresh booking updates and new project launches',
                  'Improve our website and services',
                  'Send property alerts (with your consent)',
                  'Comply with legal obligations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-stone-50 rounded-lg">
                    <span className="text-emerald-700 font-bold shrink-0">✓</span>
                    <span className="text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                <Lock className="w-6 h-6 text-rose-700" />
                Data Security
              </h2>
              <p className="text-stone-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Data Sharing
              </h2>
              <p className="text-stone-600 leading-relaxed">
                We do <strong className="text-zinc-900">not sell, trade, or rent</strong> your personal
                information to third parties. We may share your information only in the following cases:
              </p>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li className="flex gap-2"><span className="text-rose-700">•</span> With verified property developers for fresh booking inquiries (with your consent)</li>
                <li className="flex gap-2"><span className="text-rose-700">•</span> With legal advisors or authorities when required by law</li>
                <li className="flex gap-2"><span className="text-rose-700">•</span> With service providers who assist in operating our website (e.g., form processors like Formspree)</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                <Cookie className="w-6 h-6 text-rose-700" />
                Cookies & Tracking
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing
                experience. You can choose to disable cookies through your browser settings, though this
                may affect some features of the website.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Your Rights
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Access the personal data we hold about you',
                  'Request correction of inaccurate data',
                  'Request deletion of your personal data',
                  'Withdraw consent at any time',
                  'Opt out of marketing communications',
                  'Lodge a complaint with a data protection authority',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-rose-50/50 rounded-lg border border-rose-100">
                    <span className="text-rose-700 font-bold shrink-0">→</span>
                    <span className="text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Third-Party Links
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Our website may contain links to third-party websites (e.g., WhatsApp, Google Maps).
                We are not responsible for the privacy practices or content of these external sites.
                We encourage you to read their privacy policies.
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Children's Privacy
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If we become aware that we have collected
                data from a child without parental consent, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-rose-700 rounded-full" />
                Changes to This Policy
              </h2>
              <p className="text-stone-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-zinc-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-rose-400" />
                Contact Us About Privacy
              </h2>
              <p className="text-stone-300 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact us:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400">Email</p>
                    <p className="text-sm font-medium break-all">{BUSINESS.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400">Phone</p>
                    <p className="text-sm font-medium">{BUSINESS.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400">Office</p>
                    <p className="text-sm font-medium">{BUSINESS.address.line2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="pt-4 border-t border-stone-200">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 font-semibold"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
