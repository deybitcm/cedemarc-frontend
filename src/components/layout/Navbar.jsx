import { useState, useEffect, useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Image from '../ui/Image'
import logo_cedemarc from '../../assets/images/logo-cedemarc-simplificado.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [showLogo, setShowLogo] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Listen for hero visibility changes
    const handleHeroVisibility = (event) => {
      setShowLogo(!event.detail.visible)
    }

    window.addEventListener('heroVisibility', handleHeroVisibility)

    return () => {
      window.removeEventListener('heroVisibility', handleHeroVisibility)
    }
  }, [])

  useEffect(() => {
    // Update activeSection based on the current route
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.replace('/', '')) // Set to 'productos', etc.
      setShowLogo(true) // Always show logo on other pages
      return
    }

    const sections = document.querySelectorAll(
      '#inicio, #servicios, #productos, #contacto'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Detecta cuando el 50% de la sección está visible
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [location]) // Re-run when location changes

  const linkClass = (id) =>
    activeSection === id
      ? `px-3 py-2 font-semibold text-accent border-b border-accent`
      : `px-3 py-2 text-text-navbar hover:text-accent-hover`

  return (
    <nav className='shadow-lg fixed w-full z-10 bg-bg-navbar'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <NavLink to='/'>
                <Image
                  src={logo_cedemarc}
                  alt='Logo CEDEMARC'
                  className={`w-32 transition-all duration-700 transform ${
                    showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                />
              </NavLink>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <NavLink to='/' className={linkClass('inicio')} end>
              Inicio
            </NavLink>
            <NavLink to='/#servicios' className={linkClass('servicios')}>
              Servicios
            </NavLink>
            <NavLink to='/#contacto' className={linkClass('contacto')}>
              Contacto
            </NavLink>
            <NavLink to='/productos' className={linkClass('productos')}>
              Productos
            </NavLink>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='ml-4 w-8 h-8 rounded border-0 flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out text-base cursor-pointer bg-button-primary text-button-secondary hover:bg-accent hover:scale-110'
              aria-label='Cambiar tema'
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button + Theme Switch */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              title='theme button'
              type='button'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='p-2 rounded bg-button-primary text-button-secondary hover:bg-accent hover:scale-110 transition'
              aria-label='Cambiar tema'
            >
              {theme === 'dark' ? (
                <span role='img' aria-label='Oscuro'>
                  🌙
                </span>
              ) : (
                <span role='img' aria-label='Claro'>
                  ☀️
                </span>
              )}
            </button>
            <button
              type='button'
              title='menu-bar'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md border-0 transition-all duration-200 focus:outline-none bg-button-primary text-button-secondary hover:bg-accent hover:scale-110'
            >
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-50 transition-all duration-10 overflow-hidden ${
          isOpen ? 'max-h-[400px] ' : 'max-h-0'
        } bg-bg-navbar shadow-lg`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col'>
          <NavLink
            to='/'
            className={linkClass('inicio')}
            end
            onClick={(e) => {
              setIsOpen(false)
              e.preventDefault()
              if (location.pathname !== '/') {
                navigate('/')
              } else if (location.hash !== '') {
                window.location.hash = ''
              }
              const el = document.getElementById('inicio')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            Inicio
          </NavLink>
          <NavLink
            to='/#servicios'
            className={linkClass('servicios')}
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </NavLink>
          <NavLink
            to='/#contacto'
            className={linkClass('contacto')}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </NavLink>
          <NavLink
            to='/productos'
            className={linkClass('productos')}
            onClick={() => setIsOpen(false)}
          >
            Productos
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
