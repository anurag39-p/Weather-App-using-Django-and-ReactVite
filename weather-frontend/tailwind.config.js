/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files for Tailwind
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Include Flowbite React components
  ],
  theme: {
    extend: {
      backgroundImage: {
        "weather-pattern": "url('/src/assets/background.jpg')", // Set a custom background image
      },
    },
  },
  plugins: [
    flowbite, // Use Flowbite plugin
  ],
};
