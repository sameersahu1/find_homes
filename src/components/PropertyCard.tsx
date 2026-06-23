import { MapPin, BedDouble, Maximize, MessageCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { waLink } from '../config/business';

export default function PropertyCard({ property }: { property: Property }) {
  const message = `Hi Find Homes, I'm interested in ${property.title} at ${property.sector}. Price: ${property.price}. Please share more details.`;

  return (
    <div className="group bg-white border border-stone-200 hover:border-rose-700/40 hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-zinc-900 text-white text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
            {property.category.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-rose-700 text-white text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
            {property.status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-stone-500 text-xs mb-2">
          <MapPin className="w-3 h-3" />
          {property.sector}, Noida
        </div>
        <h3 className="font-bold text-zinc-900 text-lg mb-3 group-hover:text-rose-700 transition-colors leading-tight">
          {property.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-stone-600">
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-rose-700" />
            {property.bhk}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-rose-700" />
            {property.area}
          </span>
        </div>

        <div className="text-2xl font-bold text-rose-700 mb-5 border-t border-stone-100 pt-4">{property.price}</div>

        <div className="flex gap-2">
          <Link
            to="/properties"
            className="flex-1 flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-zinc-900 hover:text-white text-stone-700 py-2.5 text-sm font-medium transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-rose-700 hover:bg-rose-800 text-white py-2.5 text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
