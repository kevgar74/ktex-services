import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ConstructionPage } from '@/components/pages/ConstructionPage'

export const metadata = {
  title: 'Development & Construction in Houston, TX | K-Tex Services',
  description: 'Ground-up home construction and subdivision development across greater Houston, TX — delivered on schedule, on budget, and to spec by one accountable team.',
}

export default function Page() {
  return (
    <>
      <Nav activePath="/construction" />
      <main className="page-enter">
        <ConstructionPage />
      </main>
      <Footer />
    </>
  )
}
