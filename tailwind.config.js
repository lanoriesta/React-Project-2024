/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#212121",
        myWhite: "#F7F9F9",
      },
      container: {
        center: true,
      },
      fontFamily: {
        display: "font-sans",
      },
    },
  },
  plugins: [],
};
