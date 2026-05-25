/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        coal: "#10100f",
        graphite: "#181614",
        plum: "#2c1638",
        amberglow: "#f6a93b",
        ember: "#f97316",
        mint: "#34d399"
      },
      boxShadow: {
        glow: "0 0 45px rgba(246, 169, 59, 0.24)",
        emerald: "0 0 40px rgba(52, 211, 153, 0.18)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        gradient: "gradient 10s ease infinite",
        grain: "grain 8s steps(10) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(16px, -22px, 0) scale(1.04)" }
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2%, 2%)" },
          "40%": { transform: "translate(2%, -1%)" },
          "60%": { transform: "translate(-1%, -2%)" },
          "80%": { transform: "translate(1%, 2%)" }
        }
      }
    }
  },
  plugins: []
};
