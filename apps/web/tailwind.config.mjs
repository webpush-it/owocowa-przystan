/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'op-red': '#C0392B', // Czerwień z logo
                'op-green': '#58D68D', // Zieleń z logo (jasna)
                'op-green-dark': '#1E8449', // Ciemna zieleń dla kontrastu
                'op-cream': '#F9F7F2', // Tło (papierowe/organiczne)
                'op-brown': '#5D4037', // Tekst
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Tekst ciągły
                serif: ['Merriweather', 'serif'], // Nagłówki (klimat sielski)
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/sad-bg.jpg')", // Zakładam, że dodasz zdjęcie sadu
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
