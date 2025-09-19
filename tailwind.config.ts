import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- ISSO É FUNDAMENTAL
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // se estiver usando App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
