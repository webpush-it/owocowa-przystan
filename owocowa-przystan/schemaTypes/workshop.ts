export const workshop = {
    name: 'workshop',
    title: 'Programy Edukacyjne',
    type: 'document',
    fields: [
        { name: 'title', title: 'Tytuł warsztatu', type: 'string' },
        { name: 'description', title: 'Opis', type: 'text' },
        { name: 'image', title: 'Zdjęcie', type: 'image', options: { hotspot: true } },
        { name: 'order', title: 'Kolejność wyświetlania', type: 'number' }
    ]
}
