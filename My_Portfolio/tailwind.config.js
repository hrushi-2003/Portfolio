/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        surface: "#100d25",
        panel: "#090325",
        accent: "#915eff",
      },
      boxShadow: {
        card: "0 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [],
};
