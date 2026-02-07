import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import OurProducts from './components/ourProducts/ourProducts'
import Gallery from './components/gallery/gallery'
import Inspirations from './components/inspirations/inspirations'
import Research from './components/research/research'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto">
        <Research />
        <OurProducts />
        <Inspirations />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
