import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "midnight-100": "#2A303C",
      "midnight-200": "#1E293B",
      "midnight-300": "#1F2937",
      "midnight-400": "#111827",
      "midnight-500": "#242933",
      "gray-100": "#F3F4F6",
      "primary": "#624BFF",
    },
    },
  },
  plugins: [],
};
export default config;
