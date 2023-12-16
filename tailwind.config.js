/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#2BD0D0",
        almostBlack: "#34313D",
        darkViolet: "#3A3054",
        violet: "#4B3F6B",
        red: "#F46363",
        grey: "#9E9AA8",
        lightGrey: "#EFF1F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
