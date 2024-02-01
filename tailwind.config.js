/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cta-aqua-squeeze": "var(--cta-aqua-squeeze)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
