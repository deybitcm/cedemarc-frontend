import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
