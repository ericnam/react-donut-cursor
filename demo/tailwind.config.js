module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", "ui-sans"],
      serif: ["Dunkin", "ui-serif"],
    },
    container: {
      center: true,
      // padding: "250px", //padding based on screen size is possible
    },
    extend: {},
  },
  variants: {
    extend: {
      height: ["responsive", "hover", "focus"],
      letterSpacing: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
