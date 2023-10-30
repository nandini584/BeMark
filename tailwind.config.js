/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/Images/Mesh.svg')",
      },
      fontFamily:{
        "Halenior-bold": ["Halenior-bold", "Halvetica"],
        "Halenior-semibold": ["Halenior-semibold", "Halvetica"],
        "Halenior-compact-semibold": ["Halenior-compact-semibold", "Halvetica"],
        "Halenior-medium": ["Halenior-medium", "Halvetica"],
        "Halenior-light": ["Halenior-light", "Halvetica"]
      }
  }
  },
  plugins: [],
}

