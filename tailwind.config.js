/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,jsx}',
    './components/**/*.{html,jsx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/banner.jpg')",
        'about': "url('/img/2ndfold-rightbanner.jpg')",
      }
    },
  },
  plugins: [],
}

