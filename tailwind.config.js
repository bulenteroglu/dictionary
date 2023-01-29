/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      black: "#050505",
      "mine-shaft": "#1F1F1F",
      "mine-shaft-light": "#2D2D2D",
      "mine-shaft-lightest": "#3A3A3A",
      gray: "#838383",
      "gray-text": "#757575",
      "gray-light": "#E9E9E9",
      "gray-lightest": "#F4F4F4",
      white: "#FFFFFF",
      purple: "#A445ED",
      red: "#FF5252",
      transparent: "transparent",
    },
    fontSize: {
      4.5: "18px",
      5: "20px",
      6: "24px",
      16: "64px",
    },
    extend: {},
  },
  plugins: [],
};
