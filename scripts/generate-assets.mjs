import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const lat = -28.2628;
const lon = -52.4067;
const zoom = 13;

function lon2tile(l, z) {
  return Math.floor(((l + 180) / 360) * 2 ** z);
}

function lat2tile(l, z) {
  return Math.floor(
    ((1 - Math.log(Math.tan((l * Math.PI) / 180) + 1 / Math.cos((l * Math.PI) / 180)) / Math.PI) / 2) * 2 ** z,
  );
}

async function downloadTile(x, y, z) {
  const url = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'PreviaAdvocacia/1.0 (local asset build)' },
  });
  if (!res.ok) throw new Error(`Failed tile ${z}/${x}/${y}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function buildMap() {
  const x = lon2tile(lon, zoom);
  const y = lat2tile(lat, zoom);

  const tiles = await Promise.all([
    downloadTile(x - 1, y - 1, zoom),
    downloadTile(x, y - 1, zoom),
    downloadTile(x - 1, y, zoom),
    downloadTile(x, y, zoom),
  ]);

  const tileSize = 256;
  const canvas = sharp({
    create: {
      width: tileSize * 2,
      height: tileSize * 2,
      channels: 3,
      background: { r: 20, g: 20, b: 20 },
    },
  });

  await canvas
    .composite([
      { input: tiles[0], left: 0, top: 0 },
      { input: tiles[1], left: tileSize, top: 0 },
      { input: tiles[2], left: 0, top: tileSize },
      { input: tiles[3], left: tileSize, top: tileSize },
    ])
    .webp({ quality: 82 })
    .toFile('public/map-passo-fundo.webp');
}

async function buildAbout() {
  await sharp('public/about-office.jpg')
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile('public/about-office.webp');
}

await buildAbout();

try {
  await buildMap();
} catch (error) {
  console.warn('Map tile download failed, creating fallback map image.', error);
  await sharp({
    create: {
      width: 900,
      height: 520,
      channels: 3,
      background: { r: 17, g: 17, b: 17 },
    },
  })
    .webp({ quality: 80 })
    .toFile('public/map-passo-fundo.webp');
}

if (existsSync('public/about-office.jpg')) {
  // keep jpg as fallback optional - delete to save space
}

console.log('Images generated.');
