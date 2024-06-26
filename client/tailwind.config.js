/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090942",
        secondary: "#0CB2FF",
        text: "#ffffff",
        ctc: "#00FFFF",
      },
    },
  },
  plugins: [],
};
