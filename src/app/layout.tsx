import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { MobileQuickBar } from '@/components/MobileQuickBar';

export const viewport: Viewport = {
  themeColor: '#042026',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://plotline-erp.vercel.app'),
  title: {
    default: 'Plotline ERP — Complete Colony & Real Estate Township Management Software',
    template: '%s | Plotline Real Estate ERP',
  },
  description:
    'India’s purpose-built ERP software for colonizers, plotted townships, and builders. Live interactive SVG layout map, WhatsApp lead CRM, automated milestone demand letters, PDC cheque clearance, and double-entry accounting. 100% RERA & GST compliant.',
  keywords: [
    'Real Estate ERP India',
    'Colony Management Software',
    'Plot Layout Map Software',
    'Easy Colonizer Alternative',
    'Colony Naksha Software',
    'Real Estate CRM India',
    'Khasra Khata Land Software',
    'Milestone Demand Letters PDF',
    'PDC Cheque Clearance Real Estate',
    'RERA Compliant ERP for Builders',
  ],
  authors: [{ name: 'Plotline Technologies' }],
  creator: 'Plotline Technologies',
  publisher: 'Plotline Technologies',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://plotline-erp.vercel.app',
    title: 'Plotline ERP — Complete Colony & Real Estate Township Management System',
    description:
      'Purpose-built for Indian colonizers & developers. Interactive SVG plot map, WhatsApp lead CRM, bulk demand letters, PDC register, and double-entry accounting.',
    siteName: 'Plotline Real Estate ERP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plotline ERP — Real Estate Colony Management Software',
    description:
      'Purpose-built for Indian colonizers & developers. Stop double bookings with live interactive SVG layout maps and automated demand letters.',
  },
  alternates: {
    canonical: 'https://plotline-erp.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900 pb-16 md:pb-0 font-sans">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileQuickBar />
      </body>
    </html>
  );
}
