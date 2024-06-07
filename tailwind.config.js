/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#f9faff",
        "font-medium-emphasis": "#828282",
        "brand-yellow": "#fdc435",
        darkgoldenrod: "#c99103",
        "font-high-emphasis": "#25282b",
        aliceblue: "#e8ecf4",
        "bg-white": "#fff",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
        roboto: "Roboto",
        "title-h2": "'Playfair Display'",
        "body-18": "Raleway",
        comfortaa: "Comfortaa",
      },
      borderRadius: {
        "581xl": "600px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
