module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif']
            },
            fontSize: {
                xxs: '0.688rem'
            },
            colors: {
                'gray-800': '#0f0f0f',
                'gray-700': '#303030',
                'gray-600': '#5e5e5e',
                'gray-400': '#cfcfcf',
            },
            letterSpacing: {
                wider: '0.22em',
                widest: '0.32em'
            },
            variants: {
                fontWeight: ['responsive', 'hover', 'focus', 'active']
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
