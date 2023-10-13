/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        home_header : '#333336',
        primary_text : "#ffffff",
        link_color : "#2997ff",
        secondary_text : "#000000",
        secondary_background : "#ffffff",
        bglogin : "#edf2f7",
        third_background : "#f5f5f7"
      },

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },
    fontFamily: {
      primary : ["SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial","sans-serif"],
      header : "inherit"
    }
  },
  plugins: [],
}
