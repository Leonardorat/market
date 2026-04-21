export type Product = {
  id: string
  title: string
  price: number
  image: string
}

export type Categories = {
  slug: string
  name: string
  image: string
  description: string
  products: Product[]
}