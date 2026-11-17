export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Plotline Real Estate ERP',
        operatingSystem: 'Cloud / Web (Browser-based)',
        applicationCategory: 'BusinessApplication, RealEstateApplication, ERP',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        description:
          'Comprehensive multi-tenant Real Estate Colony Management ERP for Indian colonizers and township developers. Covers land acquisition (Khasra/Khata), plot inventory with interactive SVG layout map, WhatsApp CRM, automated demand letters, PDC cheque register, and double-entry accounting.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '124',
          bestRating: '5',
        },
        featureList: [
          'Interactive SVG Colony Plot Layout Map with Live Status',
          'Automated Milestone & Date Payment Demand Letters (PDF)',
          'Post-Dated Cheques (PDC) Register with Single Clearance Entry',
          'Multi-Tenant Company & Project RBAC Access Control',
          'Double-Entry Accounting with Trial Balance, P&L & Balance Sheet',
          'Land Acquisition Tracking with Khasra/Khata & Owner Registry Ledgers',
          'GST Vouchers with CGST/SGST/IGST Net Tax Calculation',
          'Portal Webhooks for 99acres, MagicBricks, Housing.com with De-duplication',
        ],
      },
      {
        '@type': 'Organization',
        name: 'Plotline Technologies',
        url: 'https://plotline-erp.vercel.app',
        logo: 'https://plotline-erp.vercel.app/logo.png',
        sameAs: ['https://github.com/aakashpatel7748/real-estate-erp-02'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-98765-43210',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
