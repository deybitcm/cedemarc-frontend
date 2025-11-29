import oilChangeVideo from '../../assets/videos/oil-change.mp4'
import { NavLink } from 'react-router-dom'
import logoCedemarcBlanco from '../../assets/logo_blanco_v3.png'

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
        style={{ filter: 'brightness(0.5)' }}
      >
        <source src={oilChangeVideo} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='relative z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
        <img
          src={logoCedemarcBlanco}
          alt='Logo Cedemarc'
          className='mx-auto mb-4 animate-slide-down'
          style={{ maxWidth: '650px', width: '100%' }}
        />
        <p
          className='text-xl sm:text-2xl text-gray-300 mb-8 animate-slide-up opacity-0'
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
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
          >
            Nuestros Servicios
          </NavLink>
          <NavLink
            to='/#contacto'
            className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
          >
            Contáctanos
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
