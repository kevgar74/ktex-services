import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K-Tex Services | Houston Property Acquisitions, Residential Design & Construction',
  description: 'K-Tex Services is a Houston, TX property and building firm — land and home acquisitions & sales, residential design, and ground-up development & construction across greater Houston.',
  keywords: 'Houston property acquisitions, Houston real estate, residential design Houston, home builder Houston, new construction Houston',
  authors: [{ name: 'K-Tex Services, LLC' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'K-Tex Services',
    title: 'K-Tex Services | Houston Property, Design & Construction',
    description: 'Acquisitions & sales, residential design, and development & construction across greater Houston.',
    locale: 'en_US',
    url: 'https://k-texservices.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K-Tex Services | Houston Property, Design & Construction',
    description: 'Houston, TX property & building firm — acquisitions, residential design, and ground-up construction.',
  },
  icons: { icon: '/assets/ktex-logo.png', apple: '/assets/ktex-logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a2342" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: 'K-Tex Services, LLC',
              description: 'Houston property and building firm spanning property acquisitions & sales, residential design, and development & construction.',
              url: 'https://k-texservices.com/',
              telephone: '+1-713-201-2807',
              email: 'info@k-texservices.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4008 Louetta Rd. #107',
                addressLocality: 'Spring',
                addressRegion: 'TX',
                postalCode: '77388',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
