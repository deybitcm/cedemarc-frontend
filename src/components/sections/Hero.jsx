import oilChangeVideo from '../../assets/videos/oil-change.mp4'
import { NavLink } from 'react-router-dom'
import logoCedemarcBlanco from '../../assets/logo_cedemarc_principal_v2.png'

const Hero = () => {
  return (
    <div
      id='inicio'
      className='relative h-screen flex items-center overflow-hidden'
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute w-full h-full object-cover'
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src={oilChangeVideo} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='relative z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
        <img
          src={logoCedemarcBlanco}
          alt='Logo Cedemarc'
          className='mx-auto mb-4 animate-slide-down'
          style={{ maxWidth: '400px', width: '100%' }}
        />
        <p
          className='text-2xl sm:text-3xl text-gray-300 mb-8 font-medium animate-slide-up opacity-0'
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Expertos en lubricantes y filtros para tu vehículo
        </p>
        <div
          className='flex justify-center space-x-4 animate-fade-in opacity-0'
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <NavLink
            to='/#servicios'
            className='bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold shadow-lg border border-blue-300 hover:scale-105 hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out'
          >
            Ver servicios
          </NavLink>
          <NavLink
            to='/#contacto'
            className='border border-white text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-xl hover:bg-white hover:text-blue-700 transition-all duration-200 ease-in-out'
          >
            Contactar
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
