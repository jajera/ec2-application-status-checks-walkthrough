import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgPath = join(root, "public/og-image.svg");
const outPath = join(root, "public/og-image.png");

const svg = readFileSync(svgPath);

await sharp(svg).resize(1200, 630).png().toFile(outPath);

console.log(`Wrote ${outPath}`);
