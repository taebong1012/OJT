/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        146: "146px",
        304: "304px",
        1240: "1240px",
      },
      height: {
        360: "360px",
      },
      margin: {
        60: "60px",
      },
      padding: {
        60: "60px",
      },
      colors: {
        primary: "#5170EC",
        secondary: "#CDD6F1",
        background: "#FCFCFC",
      },
      borderRadius: {
        10: "10px",
      },
      fontSize: {
        xs: ["12px"],
        s: ["12px"],
        l: ["20px"],
        xl: ["24px"],
        "2xl": ["28px"],
        "3xl": ["36px"],
        "4xl": ["42px"],
      },
      fontFamily: {
        normal: ["NanumSquareRound", "system-ui"],
        bold: ["NanumSquareRoundB", "system-ui"],
        extrabold: ["NanumSquareRoundEB", "system-ui"],
      },
      textUnderlineOffset: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
