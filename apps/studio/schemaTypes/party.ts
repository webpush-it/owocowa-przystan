import {defineField, defineType} from 'sanity'

export const party = defineType({
    name: 'party',
    title: 'Przyjęcia Plenerowe',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nazwa (np. Wieczory przy ognisku)',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Ikona (Emoji)',
            description: 'Dodaj mały akcent wizualny, np. 🔥, 🎈, 🥂',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Opis oferty',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'image',
            title: 'Zdjęcie z przyjęcia',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
