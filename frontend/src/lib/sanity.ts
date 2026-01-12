import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'zcxx0aah',
    dataset: 'production',
    useCdn: true, // true dla szybszego działania cache
    apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Typy TypeScript dla bezpieczeństwa
export interface Workshop {
    title: string
    slug: { current: string }
    mainImage: any
    description: string
    duration: string
    targetGroup: string
}
