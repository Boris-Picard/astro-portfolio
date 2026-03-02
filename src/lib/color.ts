export const normalizeTone = (color: string): string => {
  const hex = color.trim().replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    return "#9fb0c8";
  }

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  if (luminance < 0.56) {
    const lift = 0.52;
    const rr = Math.round(r + (255 - r) * lift);
    const gg = Math.round(g + (255 - g) * lift);
    const bb = Math.round(b + (255 - b) * lift);
    return `rgb(${rr}, ${gg}, ${bb})`;
  }

  return `#${full}`;
};

