/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // support for app directory
    "./pages/**/*.{js,ts,jsx,tsx}",      // if using pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // all components
    "./src/**/*.{js,ts,jsx,tsx}",        // full src path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
