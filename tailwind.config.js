/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './Pages/**/*.{js,ts,jsx,tsx}',
'./Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/Images/Mesh.svg')",
        'project' : "url('../src/Images/MeshProject.svg')",
        'bemaark' : "url('../src/Images/BemaarkCulture.svg')",
        'canvas' : "url('../src/Images/Canvas.svg')",
        'billboard' : "url('../src/Images/Porfolios/Billboard.svg')",
        'packaging' : "url('../src/Images/Porfolios/Packaging.svg')",
        'portfolio1' : "url('../src/Images/Porfolios/Portfolio1.png')",
        'portfolio2' : "url('../src/Images/Porfolios/Portfolio2.png')",
        'printdesign' : "url('../src/Images/Porfolios/PrintDesign.svg')",
        'stationery' : "url('../src/Images/Porfolios/Stationery.svg')",
        'webwork' : "url('../src/Images/Porfolios/WebWork.svg')"
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

