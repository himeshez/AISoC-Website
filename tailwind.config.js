/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        merriweather : ['Merriweather Sans', 'sans-serif'],
        manrope : ['Manrope', 'sans-serif']
      },       
      colors: {
        'blur-color': '#002853',
        'blur-color1': ' #0F6BCD' ,
      },  
      boxShadow:{
        custom :"rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px", 
      }

    },
  }, 
  plugins: [],
}
