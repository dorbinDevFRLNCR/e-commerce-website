import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import OurProducts from './components/ourProducts/ourProducts'
import Gallery from './components/gallery/gallery'
import Inspirations from './components/inspirations/inspirations'
import Research from './components/research/research'
import Footer from './components/footer/footer'
import { Toaster } from 'react-hot-toast'

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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

export default App
