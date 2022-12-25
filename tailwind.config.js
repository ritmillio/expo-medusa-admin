/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        medusa: {
          'light-purple': '#B836D9',
          'purple': '#7D31DE'
        }
      }
    },
  },
  plugins: [],
}
