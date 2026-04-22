import Link from 'next/link'
import Image from 'next/image'
import { categ } from '@/lib/data'

export default function HomePage() {
  return (
    <main className="py-8 sm:py-10 lg:py-14">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center justify-center py-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-neutral-100">
            OneVape
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-200 sm:text-base">
            Выберите категорию и перейдите в каталог.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categ.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group block overflow-hidden rounded-3xl border border-black/10 bg-black"
            >
              <div className="relative aspect-4/5 w-full bg-neutral-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h2 className="text-lg  text-neutral-100 font-medium sm:text-xl">{category.name}</h2>
                <p className="mt-1 text-sm text-neutral-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}