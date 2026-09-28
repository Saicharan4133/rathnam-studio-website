import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { JsonLd } from './json-ld'

type BreadcrumbItem = { name: string; path: string }

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-[1600px] px-5 pt-28 md:px-10">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-bone/55">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-gold">{item.name}</span>
              ) : (
                <Link href={item.path} className="underline-offset-4 hover:text-gold hover:underline">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={data} />
    </>
  )
}

