import { defineField } from 'sanity'

export const workshop = {
    name: 'workshop',
    title: 'Warsztaty Edukacyjne',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł warsztatu',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug (Adres URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Krótki opis',
            type: 'text',
        }),
        defineField({
            name: 'duration',
            title: 'Czas trwania',
            type: 'string',
        }),
        defineField({
            name: 'targetGroup',
            title: 'Grupa docelowa',
            type: 'string', // np. "Przedszkola, Szkoły"
        }),
    ]
}
