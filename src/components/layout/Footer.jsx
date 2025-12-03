import { NavLink } from 'react-router-dom'
import ThemeContext from '../../ThemeContext'
import { useContext } from 'react'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={`${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-800 text-white'
      } py-10 mt-20`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Descubre Section */}
        <div>
          <h3 className='text-lg font-bold'>Descubre</h3>
          <div className='w-10 h-1 bg-red-500 my-2'></div>
          <ul className='space-y-2'>
            <li>
              <NavLink to='/' className='hover:underline'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to='/#marcas' className='hover:underline'>
                Marcas
              </NavLink>
            </li>
            <li>
              <NavLink to='/#servicios' className='hover:underline'>
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to='/#contacto' className='hover:underline'>
                Contáctanos
              </NavLink>
            </li>
            <li>
              <NavLink to='/productos' className='hover:underline'>
                Productos
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Números de atención Section */}
        <div>
          <h3 className='text-lg font-bold'>Números de atención</h3>
          <div className='w-10 h-1 bg-red-500 my-2'></div>
          <ul className='space-y-2'>
            <li>
              <span className='font-bold'>Ventas:</span> 921 604 711
            </li>
            <li>
              <span className='font-bold'>Servicio al Cliente:</span> 981 790
              972
            </li>
          </ul>
          {/* Horarios de atención */}
          <h3 className='text-lg font-bold mt-4'>Horarios de atención</h3>
          <div className='w-10 h-1 bg-red-500 my-2'></div>
          <p>Lunes a Sábados: 8:00 AM - 6:30 PM</p>
          <p>Jueves(horario especial): 8:00 AM - 5:00 PM</p>
          <p>Domingo: Cerrado</p>
        </div>

        {/* Visítanos Section */}
        <div>
          <h3 className='text-lg font-bold'>Visítanos</h3>
          <div className='w-10 h-1 bg-red-500 my-2'></div>
          <p className='mb-4'>
            Av. Industrial Nro.1579, a cuadra y media más arriba de Polvos
            Rosados, Tacna - Perú.
          </p>
          <div className='w-full overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.5961010115298!2d-70.24647852543855!3d-17.99751878299751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf1aa7f47891%3A0x2ad6a6133c1d051!2sLubricentro%20Cedemarc%20Distribuciones%20y%20Soluciones%20EIRL!5e0!3m2!1ses!2spe!4v1764685722238!5m2!1ses!2spe'
              width='400'
              height='130'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
