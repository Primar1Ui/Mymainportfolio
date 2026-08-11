import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/**
 * Regenerates favicon/OG PNGs from SVG sources.
 * Dev-only — run once locally before committing assets:
 *   npm install --no-save sharp to-ico
 *   npm run generate:icons
 */
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

let sharp;
let toIco;
try {
  sharp = (await import('sharp')).default;
  toIco = (await import('to-ico')).default;
} catch {
  console.error('Missing dev tools. Run: npm install --no-save sharp to-ico');
  process.exit(1);
}

const iconSvg = readFileSync(join(publicDir, 'images', 'icon-bambi20.svg'));
const ogSvg = readFileSync(join(publicDir, 'images', 'og-image.svg'));

const iconOutputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

for (const { name, size } of iconOutputs) {
  await sharp(iconSvg).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`Wrote ${name} (${size}x${size})`);
}

const png16 = await sharp(iconSvg).resize(16, 16).png().toBuffer();
const png32 = await sharp(iconSvg).resize(32, 32).png().toBuffer();
const ico = await toIco([png16, png32]);
writeFileSync(join(publicDir, 'favicon.ico'), ico);
console.log('Wrote favicon.ico');

await sharp(ogSvg).resize(1200, 630).png().toFile(join(publicDir, 'images', 'og-image.png'));
console.log('Wrote images/og-image.png (1200x630)');

await sharp(iconSvg).resize(512, 512).png().toFile(join(root, 'app', 'icon.png'));
console.log('Wrote app/icon.png');

await sharp(iconSvg).resize(180, 180).png().toFile(join(root, 'app', 'apple-icon.png'));
console.log('Wrote app/apple-icon.png');
