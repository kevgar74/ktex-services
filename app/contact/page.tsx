import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata = {
  title: 'Contact K-Tex Services | Houston Property, Design & Construction',
  description: 'Talk to K-Tex Services about buying, selling, designing, or building property in Houston, TX. Call (713) 201-2807 or request a consultation.',
}

export default function Page() {
  return (
    <>
      <Nav activePath="/contact" />
      <main className="page-enter">
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}
