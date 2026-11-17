import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Matching Plotline ERP Product Theme (Deep Teal/Pine + Emerald)
        plotline: {
          dark: '#042026',
          sidebar: '#06282d',
          active: '#093c44',
          border: '#0f766e',
          teal: '#0d9488',
          emerald: '#059669',
          lightTeal: '#f0fdfa',
        },
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#042026',
        },
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(13, 148, 136, 0.12), 0 8px 10px -6px rgba(13, 148, 136, 0.08)',
        modal: '0 20px 50px rgba(4, 32, 38, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
