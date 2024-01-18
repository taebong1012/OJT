/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        146: "146px",
        160: "160px",
        304: "304px",
        1240: "1240px",
      },
      height: {
        250: "250px",
        360: "360px",
      },
      margin: {
        60: "60px",
      },
      padding: {
        40: "40px",
        60: "60px",
      },
      colors: {
        primary: "#5170EC",
        secondary: "#CDD6F1",
        background: "#FCFCFC",
        lightgrey: "#E5E5E5",
        darkgrey: "#A8A8A8",
        buttonhover: "#4460D1",
        buttonactive: "#364BA0",
        wrong: "#EF8084",
        correct: "#11A817",
      },
      borderRadius: {
        10: "10px",
      },
      fontSize: {
        xs: ["12px"],
        s: ["14px"],
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
      boxShadow: {
        default: "0px 1px 4px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
