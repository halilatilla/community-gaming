module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1fd2f1',
        black: '#0e1018',
      },
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '901px',
      xl: '1200px',
      '2xl': '1200px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
