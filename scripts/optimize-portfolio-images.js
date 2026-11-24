const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public", "images", "portfolio");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function maxSize(p) {
  // Thumbnails and hero mockups don't need full resolution
  if (/thumbnails/i.test(p) || /hero/i.test(p)) return 900;
  return 1600;
}

(async () => {
  const files = walk(ROOT);
  console.log(`Found ${files.length} images`);
  let before = 0, after = 0;
  for (const file of files) {
    const stat = fs.statSync(file);
    before += stat.size;
    const img = sharp(file);
    const meta = await img.metadata();
    const max = maxSize(file);
    const width = meta.width && meta.width > max ? max : meta.width;
    const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);
    const newSize = fs.statSync(webpPath).size;
    after += newSize;
    fs.unlinkSync(file);
    console.log(`${path.relative(ROOT, file)} -> ${path.basename(webpPath)} (${Math.round(stat.size/1024)}KB -> ${Math.round(newSize/1024)}KB)`);
  }
  console.log(`\nBefore: ${(before/1024/1024).toFixed(2)} MB`);
  console.log(`After:  ${(after/1024/1024).toFixed(2)} MB`);
})();