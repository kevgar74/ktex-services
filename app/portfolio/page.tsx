import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { PortfolioPage } from '@/components/pages/PortfolioPage'

export const metadata = {
  title: 'Project Portfolio | Houston Homes & Developments by K-Tex Services',
  description: 'Explore residential new builds, duplexes, custom homes, and developments built across greater Houston, TX by K-Tex Services.',
}

export default function Page() {
  return (
    <>
      <Nav activePath="/portfolio" />
      <main className="page-enter">
        <PortfolioPage />
      </main>
      <Footer />
    </>
  )
}
