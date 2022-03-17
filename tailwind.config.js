module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1fd2f1',
        secondary: '#6c757d',
        black: '#0e1018',
        dark: '#08090e',
        darkGrey: '#191e2e',
        danger: '#b55264',
      },
      borderColor: {
        DEFAULT: '#313c60',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        center: true,
      },
      screens: {
        md: '768px',
        lg: '901px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
