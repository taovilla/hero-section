/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
fontFamily:{
  serif :['Crimson Text', 'serif'],
  sans:['DM Sans', 'sans-serif']
},

    extend: {
      
      colors:{
        "hero-bg-color" :"#92003B",
        "hero-btn" :"#ff7be5"
      }
    },
  },
  plugins: [],
}

