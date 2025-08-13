'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Filters() {
  const router = useRouter();
  const sp = useSearchParams();
  const [purpose, setPurpose] = useState(sp.get('purpose') || '');
  const [city, setCity] = useState(sp.get('city') || '');
  const [minPrice, setMinPrice] = useState(sp.get('min') || '');
  const [maxPrice, setMaxPrice] = useState(sp.get('max') || '');
  const [minBeds, setMinBeds] = useState(sp.get('beds') || '');

  useEffect(()=>{ setPurpose(sp.get('purpose') || ''); },[sp]);

  const apply = () => {
    const params = new URLSearchParams();
    if (purpose) params.set('purpose', purpose);
    if (city) params.set('city', city);
    if (minPrice) params.set('min', minPrice);
    if (maxPrice) params.set('max', maxPrice);
    if (minBeds) params.set('beds', minBeds);
    router.push(`/properties?${params.toString()}`);
  };

  const reset = () => { router.push('/properties'); };

  return (
    <div className="filters">
      <div>
        <label>Purpose</label>
        <select value={purpose} onChange={e=>setPurpose(e.target.value)}>
          <option value="">Any</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div>
        <label>City</label>
        <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Asaba" />
      </div>
      <div>
        <label>Min Price (₦)</label>
        <input type="number" value={minPrice} onChange={e=>setMinPrice(e.target.value)} placeholder="1000000" />
      </div>
      <div>
        <label>Max Price (₦)</label>
        <input type="number" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} placeholder="200000000" />
      </div>
      <div>
        <label>Min Beds</label>
        <input type="number" value={minBeds} onChange={e=>setMinBeds(e.target.value)} placeholder="3" />
      </div>
      <div style={{alignSelf:'end', display:'flex', gap:8}}>
        <button onClick={apply}>Apply</button>
        <button className="ghost" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
