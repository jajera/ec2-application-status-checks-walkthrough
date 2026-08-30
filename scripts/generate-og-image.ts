import { writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgOut = join(root, "public/og-image.svg");
const pngOut = join(root, "public/og-image.png");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
  <defs>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1" fill="#22d3ee" fill-opacity="0.12"/>
    </pattern>
    <radialGradient id="glow" cx="20%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="#071014" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#071014"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="72" y="120" fill="#22d3ee" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="0.08em">EC2 · STATUS CHECKS · VPC</text>
  <text x="72" y="220" fill="#eef8fa" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="64" font-weight="800">In-VPC HTTP probes,</text>
  <text x="72" y="295" fill="#eef8fa" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="64" font-weight="800">Auto Scaling replace</text>
  <text x="72" y="380" fill="#b7cdd4" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="28">Walkthrough for Amazon EC2 application status checks</text>
  <rect x="72" y="440" width="220" height="52" rx="26" fill="#22d3ee"/>
  <text x="182" y="474" text-anchor="middle" fill="#04222a" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="22" font-weight="700">Get started</text>
  <text x="72" y="560" fill="#5a7a86" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="22">ec2-application-status-checks-walkthrough.johna.kiwi</text>
</svg>
`;

writeFileSync(svgOut, svg);
await sharp(Buffer.from(svg)).png().toFile(pngOut);
console.log(`Wrote ${svgOut}`);
console.log(`Wrote ${pngOut}`);
