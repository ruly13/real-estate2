import fs from 'fs/promises';
import path from 'path';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'Rumah' | 'Apartemen' | 'Tanah' | 'Ruko' | 'Vila';
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in square meters
  images: string[];
  lat?: number;
  lng?: number;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
}

const DB_FILE = path.join(process.cwd(), 'data', 'properties.json');

async function ensureDb() {
  try {
    await fs.mkdir(path.dirname(DB_FILE), { recursive: true });
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Error ensuring DB:', error);
  }
}

export async function getProperties(): Promise<Property[]> {
  await ensureDb();
  const data = await fs.readFile(DB_FILE, 'utf-8');
  return JSON.parse(data);
}

export async function getProperty(id: string): Promise<Property | null> {
  const properties = await getProperties();
  return properties.find((p) => p.id === id) || null;
}

export async function addProperty(property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<Property> {
  const properties = await getProperties();
  const newProperty: Property = {
    ...property,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  properties.push(newProperty);
  await fs.writeFile(DB_FILE, JSON.stringify(properties, null, 2));
  return newProperty;
}

export async function updateProperty(id: string, updates: Partial<Property>): Promise<Property | null> {
  const properties = await getProperties();
  const index = properties.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updatedProperty = {
    ...properties[index],
    ...updates,
    id, // ensure ID doesn't change
    updatedAt: new Date().toISOString(),
  };
  properties[index] = updatedProperty;
  await fs.writeFile(DB_FILE, JSON.stringify(properties, null, 2));
  return updatedProperty;
}

export async function deleteProperty(id: string): Promise<boolean> {
  const properties = await getProperties();
  const filtered = properties.filter((p) => p.id !== id);
  if (filtered.length === properties.length) return false;

  await fs.writeFile(DB_FILE, JSON.stringify(filtered, null, 2));
  return true;
}
