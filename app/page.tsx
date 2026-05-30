import { HomePage } from '@/components/pages/HomePage'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <Nav activePath="/" />
      <main className="page-enter">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
