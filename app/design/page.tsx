import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { DesignPage } from '@/components/pages/DesignPage'

export const metadata = {
  title: 'Residential Design in Houston, TX | K-Tex Services',
  description: 'In-house residential design and development across Houston, TX — custom floor plans, interiors, and finishes tuned for livability and resale value.',
}

export default function Page() {
  return (
    <>
      <Nav activePath="/design" />
      <main className="page-enter">
        <DesignPage />
      </main>
      <Footer />
    </>
  )
}
