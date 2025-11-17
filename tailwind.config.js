module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e6f3ff",
          500: "#1e90ff",
          700: "#1560d8"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      spacing: {
        "128": "32rem"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}