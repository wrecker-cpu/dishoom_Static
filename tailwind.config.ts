import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        header: "1fr max-content 1fr",
        "ui-kit": "minmax(min-content, 30vw) 1fr",
        20: "repeat(20, minmax(0, 1fr))",
      },
      fontFamily: {
        sans: ["var(--font-gill-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-cheltenham-bt)", ...defaultTheme.fontFamily.serif],
        italic: ["var(--font-cheltenham-lt)"],
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21:"21",
        "-1": "-1",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21:"21",
        "-1": "-1",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
      },
      screens: {
        lsm: "350px",
  
        esm: "400px",
  
        em: "480px",
  
        ew: "510px",
  
        vem: "560px",
  
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }

        mmd:"860px",
  
        emd: "999px",
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xlg: "1150px",
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "1xl": "1440px",
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
  
        "3xl": "1600px",
      },
      animation: {
        blink: 'blink 0.5s', // Adjust duration and repetition as needed
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: 'rgba(255, 255, 255, 0)' }, // Transparent at start and end
          '50%': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },    // Blink color in the middle
        },
      },
      scrollbar: {
        hide: "scrollbar-hide", // Add this utility
      },
    },
    colors:{
      cream:"#f0ece0",
      dishoom:"#353839",
      "light-dishoom":"#353839e4",
    }
  },
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* WebKit browsers */,
          },
        },
      });
    },
  ],
};
export default config;
