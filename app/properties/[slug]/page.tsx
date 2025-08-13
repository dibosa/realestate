import data from '../../../data/properties.json';
import { badge } from '../../../lib.utils';

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  const p = data.properties.find((x:any)=>x.slug === params.slug);
  if (!p) return <div style={{padding:'24px 0'}}><h1>Not found</h1></div>;

  return (
    <section style={{padding:'24px 0'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
        <h1 style={{margin:0}}>{p.title}</h1>
        <div className="badge">{badge(p.purpose)}</div>
      </div>

      <div className="gallery" style={{marginTop:12}}>
        {(p.images||[]).map((img:any, i:number)=> (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={img.url} alt={`photo ${i+1}`} />
        ))}
      </div>

      {p.videos?.length ? (
        <div style={{marginTop:12}}>
          <video controls style={{width:'100%', borderRadius:10}} src={p.videos[0].url}></video>
        </div>
      ) : null}

      <div style={{display:'grid', gridTemplateColumns:'1fr', gap:24, marginTop:16}}>
        <div>
          <div className="price" style={{fontSize:24}}>
            {p.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 })}
            {p.purpose === 'rent' ? <span className="small">/yr</span> : null}
          </div>
          <div className="location" style={{marginTop:6}}>{p.location?.address}, {p.location?.city}, {p.location?.state}</div>
          <p style={{marginTop:12}}>{p.description}</p>

          <div className="grid cols-4" style={{marginTop:12}}>
            <div className="badge">{p.bedrooms} Bedrooms</div>
            <div className="badge">{p.bathrooms} Bathrooms</div>
            <div className="badge">{p.sizeSqm} sqm</div>
            <div className="badge">{p.parkingSpaces} Parking</div>
          </div>

          <div style={{marginTop:12}}>
            {p.amenities?.map((a:string)=> <span key={a} className="badge" style={{marginRight:8}}>{a}</span>)}
          </div>
        </div>

        <div className="contact">
          <div>
            <h3>Schedule a viewing</h3>
            <form name="inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="inquiry" />
              <input type="hidden" name="propertySlug" value={p.slug} />
              <p hidden>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <p><label>Your Name<input type="text" name="name" required /></label></p>
              <p><label>Phone/WhatsApp<input type="text" name="phone" required /></label></p>
              <p><label>Message<input type="text" name="message" placeholder="I’d like to view this property..." /></label></p>
              <button type="submit">Send Inquiry</button>
            </form>
            <p className="small">This form is processed by Netlify Forms. Check submissions in your Netlify dashboard.</p>
          </div>

          <div className="mapwrap">
            <iframe
              title="map"
              width="100%"
              height="320"
              style={{border:0}}
              loading="lazy"
              src={`https://www.google.com/maps?q=${p.location.geo.lat},${p.location.geo.lng}&z=15&output=embed`}
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
