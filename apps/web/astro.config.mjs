import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'

export default defineConfig({
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
