import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'
import Hero from './sections/Hero'
import Process from './sections/Process'
import Why from './sections/Why'
import Materials from './sections/Materials'
import Gallery from './sections/Gallery'
import Segments from './sections/Segments'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Why />
        <Materials />
        <Gallery />
        <Segments />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
