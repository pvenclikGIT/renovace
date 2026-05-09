import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'
import Hero from './sections/Hero'
import Urgency from './sections/Urgency'
import Process from './sections/Process'
import BeforeAfter from './sections/BeforeAfter'
import Why from './sections/Why'
import Comparison from './sections/Comparison'
import Materials from './sections/Materials'
import ColorSwatch from './sections/ColorSwatch'
import Calculator from './sections/Calculator'
import Gallery from './sections/Gallery'
import Myths from './sections/Myths'
import Segments from './sections/Segments'
import RealizaceMap from './sections/RealizaceMap'
import Certificates from './sections/Certificates'
import BrandMaterials from './sections/BrandMaterials'
import Reviews from './sections/Reviews'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Cenik from './pages/Cenik'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function HomePage() {
  return (
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
      <Gallery />
      <Myths />
      <Segments />
      <RealizaceMap />
      <Certificates />
      <BrandMaterials />
      <Reviews />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cenik" element={<Cenik />} />
      </Routes>
      <Footer />
      <FloatingCta />
    </>
  )
}
