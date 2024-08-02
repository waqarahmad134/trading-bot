/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        heroBg: "url('/rectangle-2@2x.png')",
        exteriorHeroBg: "url('/images/hero.jpg')",
        heroSectionBg: "url('/images/herobg.jpg')",
        "payment-bg": "url('/images/payment-bg.webp')",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",

      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
}
