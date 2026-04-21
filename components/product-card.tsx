import Image from 'next/image'

type Product = {
  id: string
  title: string
  price: number
  image: string
}

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className="relative aspect-square bg-neutral-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-base font-medium">{product.title}</h2>
        <p className="mt-1 text-sm text-neutral-600">{product.price} ₽</p>
      </div>
    </article>
  )
}