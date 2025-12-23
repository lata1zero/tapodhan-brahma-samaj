import './App.css'
import './assets/css/style.css'
import Header from './assets/components/Header'
import HeroSection from './assets/components/HeroSection'
import MatrimonialHero from './assets/components/MatrimonialHero'
import Services from './assets/components/Services'
import Events from './assets/components/Events'
import Gallery from './assets/components/Gallery'
import Contact from './assets/components/Contact'
import About from './assets/components/About'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <About />
      <MatrimonialHero />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
