import {defineField, defineType} from 'sanity'

export const fruit = defineType({
    name: 'fruit',
    title: 'Owoce (Oferta sadownicza)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nazwa owocu (np. Jabłka)',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Zdjęcie',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Krótki opis',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'season',
            title: 'Dostępność (Sezon)',
            description: 'np. "Sierpień - Październik" lub "Cały rok"',
            type: 'string',
        }),
        defineField({
            name: 'varieties',
            title: 'Dostępne odmiany',
            description: 'Wpisz odmianę i naciśnij Enter',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        }),
    ],
})
