/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        integral: ["IntegralCF-Regular", "sans-serif"],
        integralBold: ["IntegralCF-Bold", "sans-serif"],
        dMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        perple: "#3D00B7",
        "custome-black": "#000000",
        "light-gray": "#565656",
        "bg-gray": "#D9E0EC",
        cyan: "#14C8B0",
        red: "#FF002E",
        green: "#00AC4F",
      },
      letterSpacing: {
        wide: ".04em",
        wider: ".125em",
      },
      // backgroundImage: {
      //   dotbg: "url('./public/images/Dot.png ')",
      // },
      screens: {
        md: "1024px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
