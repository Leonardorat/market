import Link from 'next/link'
import Image from 'next/image'
import type { Categories } from '@/lib/types'

type BrandCardProps = {
  categ: Categories
}

export default function BrandCard({ categ }: BrandCardProps) {
  return (
    <Link
      href={`/categories/${categ.slug}`}
      className="group block overflow-hidden rounded-3xl border border-black/10 bg-white"
    >
      <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-100">
        <Image
          src={categ.image}
          alt={categ.name}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{categ.name}</h2>
        <p className="mt-1 text-sm text-neutral-600">{categ.description}</p>
      </div>
    </Link>
  )
}