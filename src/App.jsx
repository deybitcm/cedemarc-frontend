import './App.css'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Products from './pages/Products'

function ScrollToSection() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100) // Espera a que se renderice
      }
    }
  }, [location])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToSection />
      <div className='min-h-screen'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path='/productos' element={<Products />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
