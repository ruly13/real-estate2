import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '@/lib/db';

export default function PropertyCard({ property }: { property: Property }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/property/${property.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0] || 'https://picsum.photos/seed/placeholder/800/600'}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {property.type}
          </div>
          {property.isFeatured && (
            <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Unggulan
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="mb-2 text-xl font-bold text-indigo-600">
            {formatPrice(property.price)}
          </div>
          <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900">
            {property.title}
          </h3>
          <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
          <div className="flex items-center gap-4 border-t border-gray-100 pt-4 text-sm text-gray-600">
            {property.bedrooms !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} KT</span>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms} KM</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Square className="h-4 w-4" />
              <span>{property.area} m&sup2;</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
