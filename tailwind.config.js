/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mode: "jit",
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#007dff",
        "primary-bg": "#F9FCFF",
        "social-link-hover": "#00aff0",
      },
    },
  },
  plugins: [],
};