/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5170EC",
        secondary: "#A0A0A0",
      },
      fontFamily: {
        normal: ["NanumSquareRound", "system-ui"],
        bold: ["NanumSquareRoundB", "system-ui"],
        extrabold: ["NanumSquareRoundEB", "system-ui"],
      },
    },
  },
  plugins: [],
};
