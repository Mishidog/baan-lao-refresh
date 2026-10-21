import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'reference/source/images';
const OUT = 'public/media';
const WIDTHS = [480, 768, 1080, 1440, 1920, 2560];

const ids = [
  '68d47b662b.jpg',
  'aeb50aa1c2.jpg',
  'f3aa707814.webp',
  '4c4d8ec029.webp',
  '10fc6e3182.jpg',
  '28906ae334.jpeg',
  'f08d570c2d.jpeg',
  'a0d701d2a5.jpeg',
  '4c21c25eda.jpg',
  '54c0a27e8e.webp',
  'd9b36aec83.jpg',
  '20f2da0da1.jpeg',
  '85293a4339.jpg',
  '21033934e3.jpg',
  '0e5b7039db.jpeg',
  'b18a5816c9.jpg',
  '74aaed478e.jpg',
  'f84e6c463b.jpeg',
  '9774088546.jpeg',
  'e2488ee7ae.jpeg',
  '0f9c51e960.jpeg',
  '7d8278ccd5.jpg',
  'b56a7fd644.jpg',
  '4066a040f0.jpg',
  '2213c8d3b7.jpg',
  '943c464dc7.jpg',
  'e428799501.jpg',
  'ed5c83b7cb.jpg',
  '6823477816.jpg',
  '7622560c86.jpg',
  'fdcf96f07c.webp',
  '89c6c4aa8b.png',
  '66dce817f2.png',
  'a34db827d9.png',
  '13ad41a868.png',
  '511f881136.jpg',
  'ee5403a881.png',
  '537d76f528.jpg',
  '15f73c5e1c.png',
  '066a474e67.webp',
  '91296fa499.png',
  '764ffb44f0.jpg',
  '17904c7144.jpg',
  'e5fffc9de5.jpg',
  '41f63b8087.jpg',
  '1613e725c0.jpg',
  '0356b0fd99.webp',
  '2e8171fc85.jpg',
  '9ecc82931a.webp',
  '0dc4e41382.webp',
  '73287ef05c.jpg',
  '673038904b.jpg',
  '673e37c149.webp',
  '64709fd2bb.jpg',
  '7ffeb27c7d.jpg',
  'bfbaa7f65e.jpg',
  'fb77759408.jpg',
  '350a2d2a85.jpg',
  '90d27e3fb9.webp',
  'bca3de97fd.png',
  'bcd3bb0df1.jpg',
  'add5f4781b.png',
  '258a19f40c.png',
  'cf36a582b7.png',
  'db2489e7bc.png',
  '28c83c03ae.jpg',
  'd896d9c637.jpg',
  '17a704fdf5.jpg',
  '02acac13a9.jpg',
  '95b24099eb.png',
  '8b2ef1356d.png',
  '3feae697c3.jpg',
  '3815f356fa.png',
  '710e7a926f.png',
  'c3785d3d7a.png',
  '58c78333d1.webp',
  '95e5665f07.jpeg',
  '67fb5613a9.jpeg',
  '92fae4d777.png',
  '8a692fa40a.jpg',
  '5e323f23b8.png',
  'b88a2a0505.png',
  'b6f93f6abb.jpg',
  '265ed0cc7b.png',
  'b5a7167ee8.png',
  'd8455df54c.webp',
  '897bad1c8a.webp',
  '68d6dd5cc7.jpg',
  'd65c842151.jpg',
  '07947c7c8f.jpg',
  '70ddda4923.jpg',
  'e16f1bff72.webp',
  'a94bc93cf3.jpg',
  '19588a2b53.jpg',
  '97bfc40fde.webp',
  'a3b5d432a3.webp',
  'e63a09786a.jpg',
  'acd85385bd.jpg',
  'a2b2b0cca0.jpg',
  'fa67d69c5d.jpg',
  '84f3623737.jpg',
  '09d2d1d3ba.jpg',
];

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync('/tmp/thumbs', { recursive: true });

const manifest = {};

async function one(id) {
  const input = path.join(SRC, id);
  const meta = await sharp(input).metadata();
  const native = meta.width;
  const base = id.replace(/\.[^.]+$/, '');
  const dir = path.join(OUT, base);
  fs.mkdirSync(dir, { recursive: true });
  const sizes = [...new Set(WIDTHS.filter((w) => w <= native))];
  if (!sizes.length) sizes.push(native);
  else if (native < 2560 && !sizes.includes(native)) sizes.push(native);
  sizes.sort((a, b) => a - b);

  const variants = [];
  for (const w of sizes) {
    const resized = sharp(input).rotate().resize({ width: w, withoutEnlargement: true });
    const avif = `${base}-${w}.avif`;
    const webp = `${base}-${w}.webp`;
    const jpg = `${base}-${w}.jpg`;
    await Promise.all([
      resized.clone().avif({ quality: 58, effort: 4 }).toFile(path.join(dir, avif)),
      resized.clone().webp({ quality: 70 }).toFile(path.join(dir, webp)),
      resized.clone().flatten({ background: '#FAF6EC' }).jpeg({ quality: 72, mozjpeg: true }).toFile(path.join(dir, jpg)),
    ]);
    variants.push({
      w,
      avif: `/media/${base}/${avif}`,
      webp: `/media/${base}/${webp}`,
      jpg: `/media/${base}/${jpg}`,
    });
  }
  const largest = await sharp(path.join(dir, `${base}-${sizes.at(-1)}.jpg`)).metadata();
  manifest[id] = {
    w: largest.width,
    h: largest.height,
    srcW: meta.width,
    srcH: meta.height,
    variants,
  };
  await sharp(input)
    .rotate()
    .resize({ width: 280, withoutEnlargement: true })
    .jpeg({ quality: 60 })
    .toFile(`/tmp/thumbs/${base}.jpg`);
  console.log(id, meta.width, meta.height, '->', sizes.join(','));
}

const queue = [...ids];
const workers = Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const id = queue.shift();
    await one(id);
  }
});
await Promise.all(workers);

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/images.json', JSON.stringify(manifest));
console.log('manifest', Object.keys(manifest).length);
