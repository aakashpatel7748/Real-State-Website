# Plotline Real Estate ERP — Official Product Website

A modern, high-converting B2B SaaS marketing website built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. Designed specifically to showcase the **Plotline Real Estate Colony Management ERP** for Indian colonizers, plotted township developers, and builders.

---

## 🌟 Key Features

1. **100% Server-Side Rendered (SSR) & SEO Ready**:
   - Built on Next.js App Router with React Server Components.
   - Fast, server-rendered pages for optimal indexing on Googlebot.
   - Comprehensive OpenGraph, Twitter Cards, dynamic `sitemap.xml`, and `robots.txt`.
   - Google Rich Snippets with Schema.org `SoftwareApplication` and `Organization` JSON-LD.

2. **Accurate Product Capabilities (Zero Fluff)**:
   - **Pre-Sales**: 99acres & MagicBricks webhooks, SHA-256 de-duplication, WhatsApp templates, Quotation PDFs.
   - **Master & Inventory**: Interactive SVG Colony Plot Layout Map with live status locking, dynamic price index repricing, and parking slot management.
   - **Post-Sales**: Bulk milestone demand letters (PDF), Builder Buyer Agreements (BBA), dues aging buckets (0-30, 31-60, 61-90, 90+ days), and possession letters.
   - **Accounts & PDC**: Post-Dated Cheques (PDC Register) with clearance-only receipting, double-entry accounting, and GST vouchers (CGST/SGST/IGST).
   - **Land & Construction**: Khasra/Khata land parcels, farmer payments to capital ledgers, contractor work orders, and site cost tracking.

3. **Interactive Visual Components**:
   - **Interactive SVG Colony Plot Map Preview**: Click on plots to inspect dimensions, facing (PLC), area, price index value, and real-time locking status.
   - **Builder Cashflow ROI Calculator**: Interactive sliders to simulate days saved in installment collection and overdue interest recovery.
   - **Live ERP Dashboard Showcase**: Tabbed mockup showcasing the actual ERP's KPI dashboard, inbound lead tables, PDC vault, and demand runs.
   - **Lead Capture & Demo Request Form**: Connected to Next.js API route (`/api/contact`).

---

## 🚀 Quick Start (Local Development)

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel (1-Click)

Because this is a native Next.js application:
1. Push the `website` directory to a new GitHub repository (e.g. `plotline-erp-website`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Next.js framework preset!
4. Click **Deploy**. The site will be live within seconds with instant worldwide CDN, SSL, and serverless API execution!
