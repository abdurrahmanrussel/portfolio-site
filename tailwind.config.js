module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],   // 👈 new default
      },
      maxWidth: {
        "content": "100rem",               // 1152 px ⇒ great for laptops
      },
    },
  },
  plugins: [],
};
