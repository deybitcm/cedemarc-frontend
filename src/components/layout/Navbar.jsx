import { useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const location = useLocation()
  const navigate = useNavigate()

  // Helper para saber si el hash está activo
  const isHashActive = (hash) => location.hash === hash

  const linkClass = (active) =>
    active
      ? `px-3 py-2 font-semibold ${
          theme === 'dark'
            ? 'text-blue-400 border-b border-blue-300'
            : 'text-yellow-400 border-b border-yellow-200'
        }`
      : `px-3 py-2 ${
          theme === 'dark'
            ? 'text-gray-300 hover:text-blue-400'
            : 'text-white hover:text-yellow-300'
        }`

  return (
    <nav
      className={`shadow-lg fixed w-full z-10 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-blue-800'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-12'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link
                to='/'
                className='text-xl font-bold text-white'
                style={{
                  fontFamily: 'Science Gothic, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  fontVariationSettings: '"slnt" 0, "wdth" 100, "CTRS" 0',
                }}
              >
                CEDEMARC
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                linkClass(isActive && location.hash === '')
              }
              end
              onClick={(e) => {
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
              className={() => linkClass(isHashActive('#servicios'))}
            >
              Servicios
            </NavLink>
            <NavLink
              to='/productos'
              className={({ isActive }) => linkClass(isActive)}
            >
              Productos
            </NavLink>
            <NavLink
              to='/#contacto'
              className={() => linkClass(isHashActive('#contacto'))}
            >
              Contacto
            </NavLink>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`ml-4 w-8 h-8 rounded border-0 flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out text-base cursor-pointer
                ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-white  hover:bg-blue-900 hover:scale-110'
                    : 'bg-blue-700 text-white  hover:bg-yellow-400 hover:scale-110'
                }
              `}
              aria-label='Cambiar tema'
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button + Theme Switch */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white  hover:bg-blue-900 hover:scale-110'
                  : 'bg-blue-700 text-white  hover:bg-yellow-400 hover:scale-110'
              } transition`}
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
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md border-0 transition-all duration-200 focus:outline-none
                ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-blue-400 text-white hover:bg-blue-900 hover:text-blue-400'
                    : 'bg-blue-700 border-yellow-300 text-white hover:bg-yellow-400 hover:text-blue-700'
                }
              `}
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
        className={`md:hidden fixed top-16 left-0 w-full z-50 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] animate-slide-down' : 'max-h-0'
        } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `block px-3 py-2 font-semibold ${
                isActive && location.hash === ''
                  ? theme === 'dark'
                    ? 'text-blue-400 border-b-2 border-blue-600'
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600'
              }`
            }
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
            className={() =>
              `block px-3 py-2 font-semibold ${
                location.hash === '#servicios'
                  ? theme === 'dark'
                    ? 'text-blue-400 border-b-2 border-blue-600'
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </NavLink>
          <NavLink
            to='/productos'
            className={({ isActive }) =>
              `block px-3 py-2 font-semibold ${
                isActive
                  ? theme === 'dark'
                    ? 'text-blue-400 border-b-2 border-blue-600'
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Productos
          </NavLink>
          <NavLink
            to='/#contacto'
            className={() =>
              `block px-3 py-2 font-semibold ${
                location.hash === '#contacto'
                  ? theme === 'dark'
                    ? 'text-blue-400 border-b-2 border-blue-600'
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
