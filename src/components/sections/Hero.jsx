import { useEffect, useState } from 'react'
import oilChangeVideo from '../../assets/videos/oil-change.mp4'
import logoCedemarcBlanco from '../../assets/images/logo_cedemarc_principal_v2.png'
import Section from '../ui/Section'
import Video from '../ui/Video'
import Image from '../ui/Image'
import Button from '../ui/Button'

const Hero = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const heroSection = document.getElementById('inicio')

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
        // Dispatch event to notify Navbar
        window.dispatchEvent(
          new CustomEvent('heroVisibility', {
            detail: { visible: entry.isIntersecting },
          })
        )
      },
      { threshold: 0.3 } // Logo starts transitioning when 30% of Hero is visible
    )

    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  return (
    <Section
      id='inicio'
      className='h-screen'
      components={
        //lista de componentes:
        [
          <div key={0} className='relative w-full h-full object cover'>
            <Video
              src={oilChangeVideo}
              opacity={50}
              className=' w-full h-full object-cover'
            />
            <div className='absolute top-0 z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in flex justify-center flex-col w-full h-full'>
              <Image
                id='hero-logo'
                src={logoCedemarcBlanco}
                alt='Logo CEDEMARC'
                className={`mx-auto my-3 w-12 sm:w-64 md:w-72 lg:w-80 animate-slide-down opacity-0 transition-all duration-700 ${
                  !isHeroVisible ? 'scale-75 opacity-0' : ''
                }`}
                style={{
                  animationDelay: '0.2s',
                  animationFillMode: 'forwards',
                }}
                width={400}
              />
              <p
                className='text-2xl sm:text-3xl text-gray-300 mb-8 font-medium animate-slide-up opacity-0'
                style={{
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards',
                }}
              >
                Expertos en lubricantes y filtros para tu vehículo
              </p>
              <div
                className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0'
                style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
              >
                <Button to='/#servicios' variant='primary' animation={true}>
                  Ver servicios
                </Button>
                <Button to='/#contacto' variant='secondary' animation={true}>
                  Contactar
                </Button>
              </div>
            </div>
          </div>,
        ]
      }
    ></Section>
  )
}

export default Hero
