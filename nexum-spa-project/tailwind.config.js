module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "ipad-pro" : {'min': '1024px', 'max': '1024px'},
        "ipad" : {'min': '768px', 'max': '1023px'},
      }
    },
  },
  plugins: [],
}
