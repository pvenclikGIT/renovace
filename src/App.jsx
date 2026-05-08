import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'
import Hero from './sections/Hero'
import Process from './sections/Process'
import Why from './sections/Why'
import Comparison from './sections/Comparison'
import Materials from './sections/Materials'
import PhotoStrip from './sections/PhotoStrip'
import Gallery from './sections/Gallery'
import Myths from './sections/Myths'
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
        <Comparison />
        <Materials />
        <PhotoStrip />
        <Gallery />
        <Myths />
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
