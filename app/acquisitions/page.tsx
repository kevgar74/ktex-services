import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { AcquisitionsPage } from '@/components/pages/AcquisitionsPage'

export const metadata = {
  title: 'Property Acquisitions & Sales in Houston, TX | K-Tex Services',
  description: 'Land and home acquisition, honest valuations, and buyer/seller/investor representation across greater Houston, TX.',
}

export default function Page() {
  return (
    <>
      <Nav activePath="/acquisitions" />
      <main className="page-enter">
        <AcquisitionsPage />
      </main>
      <Footer />
    </>
  )
}
