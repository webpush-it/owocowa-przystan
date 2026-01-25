import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sanity from '@sanity/astro'

export default defineConfig({
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
