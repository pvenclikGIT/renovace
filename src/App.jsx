import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'
import StickyBar from './components/StickyBar'
import Hero from './sections/Hero'
import Urgency from './sections/Urgency'
import Process from './sections/Process'
import BeforeAfter from './sections/BeforeAfter'
import Why from './sections/Why'
import Comparison from './sections/Comparison'
import Materials from './sections/Materials'
import ColorSwatch from './sections/ColorSwatch'
import Calculator from './sections/Calculator'
import PhotoStrip from './sections/PhotoStrip'
import Gallery from './sections/Gallery'
import Myths from './sections/Myths'
import Segments from './sections/Segments'
import RealizaceMap from './sections/RealizaceMap'
import Certificates from './sections/Certificates'
import Reviews from './sections/Reviews'
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
        <Urgency />
        <Process />
        <BeforeAfter />
        <Why />
        <Comparison />
        <Materials />
        <ColorSwatch />
        <Calculator />
        <PhotoStrip />
        <Gallery />
        <Myths />
        <Segments />
        <RealizaceMap />
        <Certificates />
        <Reviews />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
      <StickyBar />
    </>
  )
}
