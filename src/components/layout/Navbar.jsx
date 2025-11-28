import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 px-3 py-2 font-semibold'
      : 'text-gray-700 hover:text-blue-600 px-3 py-2'

  return (
    <nav className='bg-white shadow-lg fixed w-full z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link to='/' className='text-2xl font-bold text-blue-600'>
                CEDEMARC
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <NavLink
              to='/'
              className={linkClass}
              end
              onClick={(e) => {
                // Si ya estás en la home, haz scroll al inicio
                if (
                  window.location.hash === '' ||
                  window.location.hash === '#/'
                ) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              Inicio
            </NavLink>
            <NavLink
              to='/#servicios'
              className='text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Servicios
            </NavLink>
            <NavLink to='/productos' className={linkClass}>
              Productos
            </NavLink>
            <NavLink
              to='/#contacto'
              className='text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Contacto
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none'
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
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              onClick={() => setIsOpen(false)}
              className='block text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Inicio
            </Link>
            <a
              href='#servicios'
              className='block text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Servicios
            </a>
            <Link
              to='/productos'
              onClick={() => setIsOpen(false)}
              className='block text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Productos
            </Link>
            <a
              href='#contacto'
              className='block text-gray-700 hover:text-blue-600 px-3 py-2'
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
