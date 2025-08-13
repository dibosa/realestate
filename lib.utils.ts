export function formatNGN(n: number) {
  try {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(n);
  } catch {
    return `₦${n.toLocaleString()}`;
  }
}
export function badge(s: string) { return s[0].toUpperCase() + s.slice(1); }
