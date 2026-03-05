import { getProperties, addProperty } from './db';

const initialProperties = [
  {
    title: 'Rumah Mewah di Pondok Indah',
    description: 'Rumah mewah 2 lantai dengan kolam renang pribadi, desain modern tropis, dan keamanan 24 jam. Dekat dengan pusat perbelanjaan dan sekolah internasional.',
    price: 15000000000,
    location: 'Pondok Indah, Jakarta Selatan',
    type: 'Rumah',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    images: [
      'https://picsum.photos/seed/rumah1/800/600',
      'https://picsum.photos/seed/rumah1_2/800/600'
    ],
    lat: -6.275,
    lng: 106.783,
    isFeatured: true,
  },
  {
    title: 'Apartemen Studio Strategis Sudirman',
    description: 'Apartemen studio full furnished di pusat bisnis Sudirman. Fasilitas lengkap: gym, kolam renang, akses langsung ke MRT.',
    price: 1200000000,
    location: 'Sudirman, Jakarta Pusat',
    type: 'Apartemen',
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    images: [
      'https://picsum.photos/seed/apartemen1/800/600'
    ],
    lat: -6.225,
    lng: 106.811,
    isFeatured: true,
  },
  {
    title: 'Tanah Kavling Siap Bangun BSD',
    description: 'Tanah kavling strategis di cluster eksklusif BSD City. Lingkungan asri, bebas banjir, cocok untuk investasi atau hunian keluarga.',
    price: 2500000000,
    location: 'BSD City, Tangerang Selatan',
    type: 'Tanah',
    area: 200,
    images: [
      'https://picsum.photos/seed/tanah1/800/600'
    ],
    lat: -6.300,
    lng: 106.650,
    isFeatured: false,
  },
  {
    title: 'Vila Eksotik di Canggu Bali',
    description: 'Vila dengan desain estetik Bali modern. 10 menit ke pantai, private pool, cocok untuk disewakan harian atau tempat tinggal.',
    price: 8500000000,
    location: 'Canggu, Bali',
    type: 'Vila',
    bedrooms: 3,
    bathrooms: 3,
    area: 300,
    images: [
      'https://picsum.photos/seed/vila1/800/600',
      'https://picsum.photos/seed/vila1_2/800/600'
    ],
    lat: -8.650,
    lng: 115.133,
    isFeatured: true,
  }
];

export async function seedDatabase() {
  const properties = await getProperties();
  if (properties.length === 0) {
    console.log('Seeding database with initial properties...');
    for (const prop of initialProperties) {
      await addProperty(prop as any);
    }
    console.log('Database seeded successfully.');
  }
}
