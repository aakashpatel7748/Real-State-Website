import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export const viewport: Viewport = {
  themeColor: '#070a13',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://plotline-erp.vercel.app'),
  title: {
    default: 'Plotline ERP — India’s Leading Real Estate Colony Management Software',
    template: '%s | Plotline Real Estate ERP',
  },
  description:
    'Complete multi-tenant ERP for Indian colonizers and township builders. From Khasra/Khata land acquisition to interactive SVG plot maps, WhatsApp lead capturing, automated milestone demand letters, PDC cheque clearance, and double-entry accounting. 100% RERA compliant.',
  keywords: [
    'Real Estate ERP India',
    'Colony Management Software',
    'Plot Layout Map Software',
    'Real Estate CRM India',
    'Khasra Khata Land Software',
    'Milestone Demand Letters PDF',
    'PDC Cheque Clearance Real Estate',
    'RERA Compliant ERP for Builders',
    'Plotted Township Management Software',
    'Builder Buyer Agreement Software',
    'Township Double Entry Accounting',
    '99acres MagicBricks Webhook Integration',
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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#070a13] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
