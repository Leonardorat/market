import type { Categories } from './types'

export const categ: Categories[] = [
  {
    slug: 'vape',
    name: 'Vape',
    image: '/ad.jpg',
    description: 'Вейп',
    products: [
      {
        id: 'vape-1',
        title: 'Air Max 90',
        price: 500,
        image: '/add.jpg',
      },
      {
        id: 'vape-2',
        title: 'Dunk Low',
        price: 600,
        image: '/ad.jpg',
      },
    ],
  },
  {
    slug: 'snus',
    name: 'Snus',
    image: '/add.jpg',
    description: 'snus',
    products: [],
  },
]