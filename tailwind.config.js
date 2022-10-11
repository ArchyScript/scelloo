/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'scelloo-primary': '#6D5BD0',
                'scelloo-green': ' #007F00',
                'scelloo-red': '#D30000',
                'scelloo-dark': '#25213B',
                'scelloo-dark-gray': '#6E6893',
                'scelloo-gray': '#8B83BA',
                'scelloo-light-gray': '#C6C2DE',
                'scelloo-semi-light': '#F2F0F9',
                'scelloo-light': '#F4F2FF',
            },
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
        },
        container: {
            center: true,
            padding: '1rem 0',
            screens: {
                lg: '1124px',
                xl: '1200px',
                '2xl': '1560px',
            },
        },
    },
  plugins: [],
}
