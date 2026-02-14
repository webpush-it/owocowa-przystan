import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
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
            title: 'Obrazek główny',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data publikacji',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Treść',
            type: 'array',
            of: [{type: 'block'}], // To jest magiczny edytor tekstu (Portable Text)
        }),
    ],
})
