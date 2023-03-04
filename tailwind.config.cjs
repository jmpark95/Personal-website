/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Inter, sans-serif"]
    },
    extend: {
      backgroundImage: {
        "darkbg": "linear-gradient(to right, #434343 0%, black 100%)",
        "lightbg": "linear-gradient(89.9deg,rgba(216, 241, 230, 0) 0.1%, rgba(233, 226, 226, 0) 90.1%)"
      }

    },
  },
  plugins: [],
  darkMode: 'class',
}
