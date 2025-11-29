import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'

const Services = () => {
  const services = [
    {
      title: 'Diagnóstico rápido de tu vehículo',
      description:
        'Revisión express de niveles de aceite, filtros y estado general de tu vehículo',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          stroke='currentColor'
          viewBox='0 0 576 512'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path d='M275.5 6.6L209.2 103C198 119.3 192 138.6 192 158.3l0 1.7c0 53 43 96 96 96s96-43 96-96l0-1.7c0-19.8-6-39-17.2-55.3L300.5 6.6C297.7 2.5 293 0 288 0s-9.7 2.5-12.5 6.6zM109.3 341.5L66.7 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l320.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 280 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152.2 0c-33.9 0-66.5 13.5-90.5 37.5z' />
        </svg>
      ),
    },
    {
      title: 'Mantenimiento vehicular',
      description:
        'Cambio de aceite, filtros y otros servicios para mantener tu vehículo en óptimas condiciones',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          stroke='currentColor'
          viewBox='0 0 576 512'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path d='M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z' />
        </svg>
      ),
    },
    {
      title: 'Distribución al por mayor y menor',
      description:
        'Suministro de lubricantes y filtros para todo tipo de vehículos a precios competitivos',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          stroke='currentColor'
          viewBox='0 0 576 512'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path d='M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z' />
        </svg>
      ),
    },
    {
      title: 'Asesoría personalizada',
      description:
        'Te guiamos para escoger la mejor solución a partir de las necesidades de tu vehículo',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          stroke='currentColor'
          viewBox='0 0 576 512'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path d='M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z' />
        </svg>
      ),
    },
  ]

  const { theme } = useContext(ThemeContext)
  return (
    <section
      id='servicios'
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2
            className={`text-3xl font-extrabold sm:text-4xl animate-fade-in ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Nuestros Servicios
          </h2>
          <p
            className={`mt-4 text-xl animate-fade-in ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Ofrecemos soluciones integrales para el cuidado de tu vehículo
          </p>
        </div>

        <div className='mt-20 lg:mx-40 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className='flex justify-center mb-4 hover:animate-none'>
                {service.icon}
              </div>
              <h3
                className={`text-xl font-bold text-center mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
