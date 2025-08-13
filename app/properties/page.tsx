'use client';
import { useSearchParams } from 'next/navigation';
import data from '../../data/properties.json';
import PropertyCard from '../../components/PropertyCard';
import Filters from '../../components/Filters';

export default function PropertiesPage() {
  const sp = useSearchParams();
  const purpose = sp.get('purpose');
  const city = (sp.get('city')||'').toLowerCase();
  const min = Number(sp.get('min')||0);
  const max = Number(sp.get('max')||Number.MAX_SAFE_INTEGER);
  const beds = Number(sp.get('beds')||0);

  const filtered = data.properties.filter((p:any) => {
    if (purpose && p.purpose !== purpose) return false;
    if (city && !(p.location?.city || '').toLowerCase().includes(city) && !(p.location?.address || '').toLowerCase().includes(city)) return false;
    if (p.price < min || p.price > max) return false;
    if (beds && p.bedrooms < beds) return false;
    return true;
  });

  return (
    <section style={{padding:'24px 0'}}>
      <h1>Browse Properties</h1>
      <div style={{margin:'12px 0'}}><Filters/></div>
      <div className="grid cols-3" style={{marginTop:12}}>
        {filtered.map((p:any) => <PropertyCard key={p.id} p={p} />)}
      </div>
      {filtered.length === 0 && <p className="small">No properties match your filters.</p>}
    </section>
  );
}
