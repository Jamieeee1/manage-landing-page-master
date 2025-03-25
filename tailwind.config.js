/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundPosition: {
        "topright" : "right -90% bottom 40%",
      },

      backgroundSize: {
        "50" : "90%"
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
      },

      backgroundImage: {
        "major" : "url('/images/bg-tablet-pattern.svg')",
      }
      ,
      gridTemplateColumns: {
        "cus3" : "1fr 2fr 1fr"
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

