import { defineField, defineType } from 'sanity'

export const workshop = defineType({
    name: 'workshop',
    title: 'Warsztaty Edukacyjne',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł zajęć',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        }),
        defineField({
            name: 'mainImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'duration',
            title: 'Czas trwania',
            type: 'string',
            description: 'np. Min. 2h'
        }),
        defineField({
            name: 'targetGroup',
            title: 'Grupa docelowa',
            type: 'string',
            description: 'np. Dzieci klas 1-3'
        }),
        defineField({
            name: 'groupSize',
            title: 'Liczebność grupy',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Opis i zakres tematyczny',
            type: 'text',
        }),
        defineField({
            name: 'additionalInfo',
            title: 'Dodatkowe uwagi',
            type: 'text'
        })
    ]
})
