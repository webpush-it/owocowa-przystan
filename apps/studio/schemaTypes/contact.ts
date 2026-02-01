import { defineField, defineType } from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Wiadomości ze strony',
    type: 'document',
    icon: () => '✉️',
    fields: [
        defineField({
          name: 'status',
          title: 'Status wiadomości',
          type: 'string',
          options: {
            list: [
              {title: 'Nowa 🔴', value: 'new'},
              {title: 'Przeczytana 🟡', value: 'read'},
              {title: 'Odpowiedziano 🟢', value: 'replied'}
            ],
            layout: 'radio'
          },
          initialValue: 'new'
        }),
        defineField({
            name: 'name',
            title: 'Imię i Nazwisko',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'email',
            title: 'E-mail',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'message',
            title: 'Treść wiadomości',
            type: 'text',
            readOnly: true,
        }),
        defineField({
            name: 'createdAt',
            title: 'Data otrzymania',
            type: 'datetime',
            readOnly: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'status',
            date: 'createdAt'
        },
        prepare({title, subtitle, date}) {
          const statusMap = {
            new: '🔴 Nowa',
            read: '🟡 Przeczytana',
            replied: '🟢 Odpowiedziano'
          }
          return {
            title: `${title}`,
            // @ts-ignore
            subtitle: `${statusMap[subtitle] || 'Brak statusu'} | ${new Date(date).toLocaleString()}`
          }
        }
    }
})
