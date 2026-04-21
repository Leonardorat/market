import { notFound } from 'next/navigation'
import Image from 'next/image'
import { categ } from '@/lib/data'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categ.find((item) => item.slug === slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="py-8 sm:py-10 lg:py-14">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm text-neutral-500">Категория</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600 sm:text-base">
            {category.description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {category.products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-square bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h2 className="text-base font-medium sm:text-lg">{product.title}</h2>
                <p className="mt-1 text-sm text-neutral-600">{product.price} ₽</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}