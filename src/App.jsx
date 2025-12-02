import ThemeContext from './ThemeContext'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import BrandsCarousel from './components/sections/BrandsCarousel'
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
        }, 100)
      }
    }
  }, [location])
  return null
}

function AnimatedPage({ children }) {
  const location = useLocation()
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => setAnimate(false), 500)
    return () => clearTimeout(timer)
  }, [location.pathname])
  return <div className={animate ? 'page-slide-in' : ''}>{children}</div>
}

AnimatedPage.propTypes = {
  children: PropTypes.node,
}

function App() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HashRouter>
        <ScrollToSection />
        <div
          className={`min-h-screen ${
            theme === 'dark'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-900'
          }`}
        >
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <AnimatedPage>
                  <Hero />
                  <BrandsCarousel />
                  <Services />
                  <Contact />
                </AnimatedPage>
              }
            />
            <Route
              path='/productos'
              element={
                <AnimatedPage>
                  <Products />
                </AnimatedPage>
              }
            />
          </Routes>
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
