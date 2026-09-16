import fs from 'fs';
import zlib from 'zlib';

function createPng(width, height, drawPixel) {
  // RGBA buffer with filter byte per scanline
  const rowSize = width * 4 + 1;
  const buffer = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    buffer[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawPixel(x, y, width, height);
      buffer[pixelOffset] = r;
      buffer[pixelOffset + 1] = g;
      buffer[pixelOffset + 2] = b;
      buffer[pixelOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(buffer);

  // PNG Header
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      let byte = buf[i];
      for (let j = 0; j < 8; j++) {
        if ((crc ^ byte) & 1) {
          crc = (crc >>> 1) ^ 0xedb88320;
        } else {
          crc = crc >>> 1;
        }
        byte = byte >>> 1;
      }
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lengthBuf = Buffer.alloc(4);
    lengthBuf.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([lengthBuf, body, crcBuf]);
  }

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: 6 (RGBA)
  ihdrData[10] = 0; // Compression method: 0
  ihdrData[11] = 0; // Filter method: 0
  ihdrData[12] = 0; // Interlace method: 0

  const ihdr = chunk('IHDR', ihdrData);
  const idat = chunk('IDAT', compressedData);
  const iend = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// Distance to line segment
function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function renderPromptIcon(isMaskable) {
  return (x, y, w, h) => {
    // Normalise coordinates to 0..1
    let nx = x / w;
    let ny = y / h;

    // Background gradient: dark navy/violet
    let bgR = 15 + Math.floor((nx + ny) * 8);
    let bgG = 23 + Math.floor((1 - ny) * 12);
    let bgB = 42 + Math.floor(nx * 35);
    let bgA = 255;

    // If standard icon (not maskable), render smooth rounded squircle corners
    if (!isMaskable) {
      const radius = 0.22;
      const rx = Math.max(0, Math.abs(nx - 0.5) - (0.5 - radius));
      const ry = Math.max(0, Math.abs(ny - 0.5) - (0.5 - radius));
      const dist = Math.hypot(rx, ry);
      if (dist > radius) {
        return [0, 0, 0, 0];
      }
    }

    // Safe zone scaling:
    // If maskable, icon elements are scaled to fit central 75%
    const scale = isMaskable ? 0.72 : 0.88;
    const cx = 0.5;
    const cy = 0.5;
    const sx = (nx - cx) / scale + cx;
    const sy = (ny - cy) / scale + cy;

    // Check if inside icon graphics
    // 1. Chevron `>`
    const dChevron1 = distToSegment(sx, sy, 0.28, 0.32, 0.44, 0.5);
    const dChevron2 = distToSegment(sx, sy, 0.44, 0.5, 0.28, 0.68);
    const dChevron = Math.min(dChevron1, dChevron2);

    // 2. Slash `/`
    const dSlash = distToSegment(sx, sy, 0.56, 0.26, 0.44, 0.74);

    // 3. AI Sparkle Star around (0.70, 0.38)
    const starX = sx - 0.70;
    const starY = sy - 0.38;
    const starDist = Math.hypot(starX, starY);
    const starShape = Math.abs(starX) * 2.8 + Math.abs(starY) * 2.8;

    // 4. Underscore Cursor `_`
    const dUnderscore = distToSegment(sx, sy, 0.58, 0.70, 0.74, 0.70);

    // Stroke width
    const stroke = 0.038;

    // Ambient center glow
    const centerDist = Math.hypot(nx - 0.5, ny - 0.5);
    if (centerDist < 0.4) {
      const glow = (1 - centerDist / 0.4) * 0.35;
      bgR = Math.min(255, bgR + Math.floor(70 * glow));
      bgG = Math.min(255, bgG + Math.floor(120 * glow));
      bgB = Math.min(255, bgB + Math.floor(240 * glow));
    }

    // Render Chevron (Cyan/Blue gradient)
    if (dChevron < stroke) {
      const t = Math.max(0, 1 - dChevron / stroke);
      return [56, 189, 248, Math.floor(255 * t)];
    }

    // Render Slash (Indigo/Violet gradient)
    if (dSlash < stroke * 0.9) {
      const t = Math.max(0, 1 - dSlash / (stroke * 0.9));
      return [129, 140, 248, Math.floor(255 * t)];
    }

    // Render Sparkle
    if (starDist < 0.03 || starShape < 0.08) {
      return [255, 255, 255, 255];
    }
    if (starDist < 0.065) {
      return [168, 85, 247, 220];
    }

    // Render Underscore
    if (dUnderscore < stroke * 0.9) {
      const t = Math.max(0, 1 - dUnderscore / (stroke * 0.9));
      return [192, 132, 252, Math.floor(255 * t)];
    }

    return [bgR, bgG, bgB, bgA];
  };
}

fs.writeFileSync('public/pwa-192x192.png', createPng(192, 192, renderPromptIcon(false)));
fs.writeFileSync('public/pwa-512x512.png', createPng(512, 512, renderPromptIcon(false)));
fs.writeFileSync('public/pwa-maskable-192x192.png', createPng(192, 192, renderPromptIcon(true)));
fs.writeFileSync('public/pwa-maskable-512x512.png', createPng(512, 512, renderPromptIcon(true)));
fs.writeFileSync('public/apple-touch-icon.png', createPng(180, 180, renderPromptIcon(false)));

console.log('✅ Generated 192, 512, maskable, and apple-touch-icon PNGs successfully!');
