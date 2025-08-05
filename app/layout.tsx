import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsappButton';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://studioarchtantra.com'),
  title: 'Studio Archtantra - Architecture & Design Excellence',
  description: 'Studio Archtantra is a premier architecture firm specializing in residential, commercial, and interior design projects. Creating spaces that inspire and endure.',
  keywords: 'architecture, design, residential, commercial, interior design, Studio Archtantra',
  authors: [{ name: 'Studio Archtantra' }],
  creator: 'Studio Archtantra',
  openGraph: {
    title: 'Studio Archtantra - Architecture & Design Excellence',
    description: 'Creating spaces that inspire and endure. Premier architecture firm specializing in residential, commercial, and interior design.',
    url: 'https://studioarchtantra.com',
    siteName: 'Studio Archtantra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Archtantra - Architecture & Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Archtantra - Architecture & Design Excellence',
    description: 'Creating spaces that inspire and endure.',
    creator: '@studioarchtantra',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}