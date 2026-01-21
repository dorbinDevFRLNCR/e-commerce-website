import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import OurProducts from './components/ourProducts/ourProducts'
import Gallery from './components/gallery/gallery'
import Inspirations from './components/inspirations/inspirations'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="max-w-2xl mx-auto">
        <OurProducts />
        <Inspirations />
        <Gallery />
      </main>
    </>
  )
}

export default App
