import { notFound } from 'next/navigation'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { GalleryPage } from '@/components/pages/GalleryPage'
import { GALLERIES } from '@/lib/data'

interface Props {
  params: Promise<{ project: string }>
}

export async function generateStaticParams() {
  return [{ project: 'oak-forest' }, { project: 'fortune' }, { project: 'acres' }]
}

export async function generateMetadata({ params }: Props) {
  const { project } = await params
  const data = GALLERIES[project]
  if (!data) return {}
  return {
    title: `${data.name} — Houston Gallery | K-Tex Services`,
    description: data.blurb,
  }
}

export default async function Page({ params }: Props) {
  const { project } = await params
  const data = GALLERIES[project]
  if (!data) notFound()

  return (
    <>
      <Nav activePath="/portfolio" />
      <main className="page-enter">
        <GalleryPage data={data} projectSlug={project} />
      </main>
      <Footer />
    </>
  )
}
