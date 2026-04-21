import type { Categories } from './types'

export const categ: Categories[] = [
  {
    slug: 'vape',
    name: 'Вейп',
    image: '/e.jpg',
    description: '1',
    products: [
      {
        id: 'vape-1',
        title: '1',
        price: 500,
        image: '/add.jpg',
      },
      {
        id: 'vape-2',
        title: '2',
        price: 600,
        image: '/ad.jpg',
      },
    ],
  },
  {
    slug: 'snus',
    name: 'Снюс',
    image: '/s.jpg',
    description: '2',
    products: [],
  },

    {
    slug: 'pour',
    name: 'Жижа',
    image: '/pp.jpg',
    description: '3',
    products: [],
  },
]