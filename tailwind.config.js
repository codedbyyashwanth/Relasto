/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
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

