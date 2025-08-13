'use client';
import Link from 'next/link';

export default function PropertyCard({ p }: { p: any }) {
  const hero = p.images?.[0]?.url || '/placeholder.jpg';
  return (
    <Link href={`/properties/${p.slug}`} className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={hero} alt={p.title} />
      <div className="card-body">
        <div className="price">{p.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 })} {p.purpose === 'rent' ? <span className="small">/yr</span> : null}</div>
        <div>{p.title}</div>
        <div className="location">{p.location?.address || ''}{p.location?.city ? `, ${p.location.city}` : ''}</div>
        <div className="small">{p.bedrooms} bed • {p.bathrooms} bath • {p.sizeSqm} sqm</div>
      </div>
    </Link>
  );
}
