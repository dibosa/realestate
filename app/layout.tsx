import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Real Estate | Listings',
  description: 'Responsive real estate listings for sale and rent.',
  openGraph: {
    title: 'Real Estate | Listings',
    description: 'Find your next home.',
    url: 'https://example.com',
    siteName: 'Real Estate',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <nav>
              <Link href="/">🏠 RealEstate</Link>
              <div className="spacer" />
              <Link href="/properties">Browse</Link>
              <Link href="/about">About</Link>
              <a href="https://wa.me/2348012345678" target="_blank">WhatsApp</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container small">
            © {new Date().getFullYear()} RealEstate. Built for Netlify test. | <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
