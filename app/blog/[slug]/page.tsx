import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/metadata'
import { blogPosts } from '@/lib/seo-content'
import { BlogArticlePage } from '@/components/seo/editorial-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return {}
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  })
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!blogPosts.some((post) => post.slug === slug)) notFound()
  return <BlogArticlePage slug={slug} />
}

