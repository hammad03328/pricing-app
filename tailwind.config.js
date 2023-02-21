/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs': '353px', //Mobile
      'sm': '640px', //Tablet 
      'md': '768px', //
      'lg': '1024px', //Laptop
      'xl': '1280px', // Desktop
    },
    extend: {},
  },
  plugins: [],
}