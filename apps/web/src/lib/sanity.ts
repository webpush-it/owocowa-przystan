import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "zcxx0aah",
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
    useCdn: true,
    token: import.meta.env.SANITY_API_WRITE_TOKEN,
    apiVersion: "2024-03-20",
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
    return builder.image(source)
}
