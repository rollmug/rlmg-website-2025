/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['var(--font-nunito)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#019FF9", // for buttons
          "primary-content": "#ffffff", // button text color
          secondary: "#019FF9", //blue - for headers
          "base-100": "#ffffff", // main background
          "base-200": "#F3F4F7", // slightly darker background on some content blocks
          "base-content": "#2A303E", // main text color
          neutral: "#2A303E", // for dark bg on quote blocks and other content blocks
          "neutral-content": "#ffffff", // text on dark bg
          accent: "#FFD95C", // for links on dark background, and for play btn color
          warning: "#FFD95C",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
