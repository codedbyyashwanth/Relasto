/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            '2xl': {'max': '1535px'},
            'xl': {'max': '1279px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'sm': {'max': '639px'},
        },
        extend: {
            colors: {
                "primary-color": "#1a1a1a",
                "accent-color": "#FD650B",
                "o-accent": "#FCEEE6"
            }
        },
    },
    plugins: [],
}

