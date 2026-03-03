import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
    site: 'https://owocowaprzystan.pl',
    adapter: vercel(),
    integrations: [
        tailwind(),
        react(),
        sitemap(),
        sanity({
            projectId: 'zcxx0aah',
            dataset: 'production',
            useCdn: true,
        }),
    ],
})
