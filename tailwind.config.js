module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xxs': '0.5rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      red: '#DE1A1A',
      black: '#131313',
      semiblack: '#333333',
      blue: '#7F5CFF',
      white: '#FDFFFF',
      celadon: '#A1E8AF',
      transparent: 'transparent',
      darktext: '#aaaaaa',
      darker: '#555555'
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
