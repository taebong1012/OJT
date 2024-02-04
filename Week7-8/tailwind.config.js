/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        normal: ["NanumSquareRound", "system-ui"],
        bold: ["NanumSquareRoundB", "system-ui"],
        extrabold: ["NanumSquareRoundEB", "system-ui"],
      },
    },
  },
  plugins: [],
};
