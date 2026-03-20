import { useReveal } from './hooks/useReveal'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Work from './sections/Work'
import About from './sections/About'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { marqueeSkills, clients } from './data'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />

        {/* Skills ticker */}
        <Marquee items={marqueeSkills} speed={20} />

        <Work />

        <About />

        <Experience />

        {/* Clients ticker */}
        <Marquee items={clients} speed={28} dim />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
