/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5773ed",
        
"secondary": "#fc92a9",
        
"accent": "#30d148",
        
"neutral": "#181221",
        
"base-100": "#EAE5EB",
        
"info": "#829DED",
        
"success": "#60EB9C",
        
"warning": "#EBC60F",
        
"error": "#F97058",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

