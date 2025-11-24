import { useEffect } from 'react'

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-slide-up')
            entry.target.classList.remove('opacity-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.service-card').forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Cambio de Aceite',
      description:
        'Servicio profesional de cambio de aceite con productos de primera calidad',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      ),
    },
    {
      title: 'Cambio de Filtros',
      description: 'Reemplazo de filtros de aceite, aire y combustible',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z'
          />
        </svg>
      ),
    },
    {
      title: 'Diagnóstico',
      description: 'Diagnóstico completo del estado de tu vehículo',
      icon: (
        <svg
          className='w-12 h-12 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
    },
  ]

  return (
    <section id='servicios' className='py-20 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl animate-fade-in'>
            Nuestros Servicios
          </h2>
          <p
            className='mt-4 text-xl text-gray-600 animate-fade-in'
            style={{ animationDelay: '0.2s' }}
          >
            Ofrecemos servicios profesionales para el mantenimiento de tu
            vehículo
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className='flex justify-center mb-4 animate-bounce hover:animate-none'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-900 text-center mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 text-center'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
