import oilChangeVideo from '../../assets/videos/oil-change.mp4'

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
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 animate-slide-down'>
          CEDEMARC Lubricentro
        </h1>
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
          <a
            href='#servicios'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
          >
            Nuestros Servicios
          </a>
          <a
            href='#contacto'
            className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
