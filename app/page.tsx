import Link from 'next/link';
import PropertyCard from '../components/PropertyCard';
import data from '../data/properties.json';

export default function HomePage() {
  const latest = data.properties.slice(0, 8);
  const featured = data.properties.filter((p:any) => p.featured).slice(0, 8);
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Find your next home</h1>
          <p>Browse featured listings or explore all properties for sale and rent.</p>
          <div className="searchbar" style={{marginTop:12}}>
            <Link href="/properties"><button>Browse Properties</button></Link>
            <Link href="/properties?purpose=rent"><button className="ghost">Rentals</button></Link>
            <Link href="/properties?purpose=sale"><button className="ghost">For Sale</button></Link>
          </div>
        </div>
      </section>

      <section style={{padding:'24px 0'}}>
        <h2>Featured</h2>
        <div className="grid cols-3" style={{marginTop:12}}>
          {featured.map((p:any) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      <section style={{padding:'24px 0'}}>
        <h2>Latest</h2>
        <div className="grid cols-3" style={{marginTop:12}}>
          {latest.map((p:any) => <PropertyCard key={p.id} p={p} />)}
        </div>
        <div style={{marginTop:16}}><Link href="/properties"><button>See all</button></Link></div>
      </section>
    </div>
  );
}
