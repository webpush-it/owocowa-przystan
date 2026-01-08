export const pageSettings =  {
    name: 'pageSettings',
    title: 'Ustawienia Strony',
    type: 'document',
    fields: [
        { name: 'aboutText', title: 'O nas', type: 'text' },
        { name: 'offerText', title: 'Nasza oferta', type: 'text' },
        { name: 'facebookUrl', title: 'Link do Facebooka', type: 'url' },
        { name: 'topics', title: 'Tematyka zajęć', type: 'array', of: [{type: 'string'}] }
    ]
}
