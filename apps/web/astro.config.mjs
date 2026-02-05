import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'

export default defineConfig({
    // tryb 'hybrid': wszystkie odsłony są statyczne, chyba że dodasz `export const prerender = false`
    output: 'hybrid',
    adapter: vercel(),
    integrations: [
        tailwind(),
        react(),
        sanity({
            projectId: 'zcxx0aah',
            dataset: 'production',
            useCdn: true,
        }),
    ],
})
