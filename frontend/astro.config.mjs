import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
    integrations: [
        sanity({
            projectId: 'zcxx0aah',
            dataset: 'production',
            useCdn: true,
            studioUrl: "http://localhost:3333", // Adres Twojego lokalnego studia
        }),
    ],
});
