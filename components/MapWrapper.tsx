'use client';

import dynamic from 'next/dynamic';
import { Property } from '@/lib/db';

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">Memuat Peta...</div>
});

interface MapWrapperProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export default function MapWrapper(props: MapWrapperProps) {
  return (
    <div className={props.className}>
      <Map {...props} className="h-full w-full rounded-inherit z-0" />
    </div>
  );
}
