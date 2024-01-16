/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1240: "1240px",
      },
      margin: {
        60: "60px",
      },
      colors: {
        primary: "#5170EC",
        secondary: "#CDD6F1",
      },
    },
  },
  plugins: [],
};
