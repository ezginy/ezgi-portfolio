/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeCream: '#FFBB94',
        themePink: '#FB9590',
        themeRose: '#DC586D',
        themePlum: '#A33757',
        themeDeep: '#852E4E',
        themeDark: '#4C1D3D',
      },
    },
  },
  plugins: [],
}
