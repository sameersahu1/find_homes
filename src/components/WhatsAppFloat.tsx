import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, waLink } from '../config/business';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 mb-2"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rose-700 text-white px-5 py-3 shadow-lg hover:bg-rose-800 transition-all text-sm font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Inquiry
            </a>
            <a
              href={`tel:+91${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 shadow-lg hover:bg-black transition-all text-sm font-semibold"
            >
              <Phone className="w-5 h-5" />
              Click to Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 shadow-xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-zinc-900 hover:bg-black' : 'bg-rose-700 hover:bg-rose-800'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
      </button>
    </div>
  );
}
