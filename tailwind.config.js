/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
    extend: {
      colors: {
        raisinblack: "#1E212B",
        azure: "#EDF7F6",
      },
    },
  },
  plugins: [],
};
