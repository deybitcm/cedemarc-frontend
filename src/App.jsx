import ThemeContext from './ThemeContext'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './pages/Landing'
import Products from './pages/Products'
import PromotionModal from './components/ui/PromotionModal'
import imagePromotionHorizontal from './assets/images/oferta-horizontal-2.png'
import imagePromotionMobile from './assets/images/oferta-vertical-2.png'

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
    } else {
      // Scroll to top when navigating to a route without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
  const [showPromotion, setShowPromotion] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HashRouter>
        <ScrollToSection />
        <div className='min-h-screen flex flex-col bg-bg-primary text-text-primary'>
          <Navbar />
          {showPromotion && (
            <PromotionModal
              imageSrc={imagePromotionHorizontal}
              mobileImageSrc={imagePromotionMobile}
              onClose={() => setShowPromotion(false)}
            />
          )}
          <main className='flex-grow'>
            <Routes>
              <Route
                path='/'
                element={
                  <AnimatedPage>
                    <Landing />
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
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
