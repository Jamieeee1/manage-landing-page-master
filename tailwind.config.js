/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundPosition: {
        "topright" : "top -70% right 40%",
      }
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
      }
    },

    screens: {
      "sm" : "375px",
      "dk" : "1440px"
    },

    fontFamily: {
      "vietnam" : ["Be Vietnam Pro", "sans-serif"],
    },

    fontWeight: {
      "lvl1" : "400",
      "lvl2" : "500",
      "lvl3" : "700"
    },

    backgroundImage: {
      "major" : "url('/images/bg-tablet-pattern.svg')",
    }
  },
  plugins: [],
}

