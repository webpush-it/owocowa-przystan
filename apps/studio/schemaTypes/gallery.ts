import { defineField, defineType } from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Galeria Zdjęć',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł/Opis zdjęcia',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Zdjęcie',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'category',
            title: 'Kategoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Sad', value: 'sad' },
                    { title: 'Warsztaty', value: 'warsztaty' },
                    { title: 'Zwierzęta i Owady', value: 'przyroda' }
                ]
            }
        })
    ]
})
