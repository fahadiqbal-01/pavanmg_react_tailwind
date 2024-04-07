/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1200px',
    },
    fontFamily: {
      pop:["Poppins", "sans-serif"],
      dm :["DM Sans", "sans-serif"]
    }
  },
  plugins: [],
}
}
