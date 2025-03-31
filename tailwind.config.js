/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundPosition: {
        "topright" : "right -90% bottom 70%",
      },

      backgroundSize: {
        "50" : "90%",
        "full" : "100%"
      },

      colors: {
        pry: {
          "brightred": "#f25f3a",
          "darkblue": "#242d52"
        },
        sec: {
          "darkgreyishblue": "#9095a7",
          "verydarkblue": "#1d1e25",
          "verypalered": "#ffefeb",
          "verylightgrey": "#fafafa"
        },
        
        "transparent" : "transparent"
        
      },

      screens: {
        'tab': '768px',
        'mylap': '1020px',
        "mid2K" : '2000px'
      },

      backgroundImage: {
        "major" : "url('images/bg-tablet-pattern.svg')",
        "last" : "url('images/bg-simplify-section-desktop.svg')",
        "mob" : "url('images/bg-simplify-section-mobile.svg')"
      }
      ,
      gridTemplateColumns: {
        "cus3" : "1fr 2fr 1fr",
        "foot" : "1fr 1.5fr 1fr",
        "field" : "auto auto"
      }, 
      boxShadow : {
        "but" : "0 8px 8px -1px #ff552b5e"
      }
    },

    fontFamily: {
      "vietnam" : ["Be Vietnam Pro", "sans-serif"],
    },

    fontWeight: {
      "lvl1" : "400",
      "lvl2" : "500",
      "lvl3" : "700"
    },

  },
  plugins: [],
}

