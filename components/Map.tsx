'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Property } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export default function Map({ properties, center = [-2.5489, 118.0149], zoom = 5, className = "h-[400px] w-full rounded-2xl z-0" }: MapProps) {
  // If there's only one property and it has coordinates, center on it
  const mapCenter = properties.length === 1 && properties[0].lat && properties[0].lng
    ? [properties[0].lat, properties[0].lng] as [number, number]
    : center;

  const mapZoom = properties.length === 1 ? 15 : zoom;

  return (
    <div className={className}>
      <MapContainer 
        center={mapCenter} 
        zoom={mapZoom} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', borderRadius: 'inherit', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => {
          if (!property.lat || !property.lng) return null;
          
          return (
            <Marker 
              key={property.id} 
              position={[property.lat, property.lng]} 
              icon={icon}
            >
              <Popup className="rounded-xl">
                <div className="w-48">
                  <div className="relative h-24 w-full mb-2 overflow-hidden rounded-md">
                    <Image 
                      src={property.images[0] || 'https://picsum.photos/seed/placeholder/400/300'} 
                      alt={property.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-bold text-sm line-clamp-1">{property.title}</h3>
                  <p className="text-indigo-600 font-semibold text-sm mb-2">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(property.price)}
                  </p>
                  <Link 
                    href={`/property/${property.id}`}
                    className="block w-full text-center bg-indigo-600 text-white text-xs py-1.5 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
