import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import castrol from '../../assets/brands/logo-castrol-3.svg'
import chevron from '../../assets/brands/logo-chevron-3.svg'
import liquimoly from '../../assets/brands/logo-liquimoly.svg'
import mobil from '../../assets/brands/logo-mobil.svg'
import motul from '../../assets/brands/logo-motul.svg'
import prestone from '../../assets/brands/logo-prestone.svg'
import repsol from '../../assets/brands/logo-repsol-2.svg'
import shell from '../../assets/brands/logo-shell-2.svg'
import fleetguard from '../../assets/brands/logo-fleetguard-2.svg'
import mann from '../../assets/brands/logo-mann.svg'
import sakura from '../../assets/brands/logo-sakura.svg'
import millard from '../../assets/brands/logo-millard-3.svg'
import wb from '../../assets/brands/logo-wb.svg'
import hengst from '../../assets/brands/logo-hengst.svg'
import ihp from '../../assets/brands/logo-ihp.svg'
import '../../styles/BrandsCarousel.css'

const BrandsCarousel = () => {
  const { theme } = useContext(ThemeContext)

  const brandLogosLubricantes = [
    castrol,
    chevron,
    liquimoly,
    mobil,
    motul,
    prestone,
    repsol,
    shell,
  ]

  const brandLogosFiltros = [mann, millard, sakura, fleetguard, wb, hengst, ihp]

  return (
    <section
      id='marcas'
      className={`pt-20 pb-10 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2
            className={`text-3xl font-extrabold sm:text-4xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Nuestros principales proveedores
          </h2>
          <p
            className={`mt-4 text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Trabajamos con las mejores marcas del mercado
          </p>
        </div>

        <div className='carousel-container'>
          <div className='carousel'>
            {brandLogosLubricantes.map((logo, index) => (
              <div className='carousel-item' key={index}>
                <img
                  className='logo-brand'
                  src={logo}
                  alt={`Brand lubricante ${index}`}
                />
              </div>
            ))}
          </div>
          <div className='carousel' aria-hidden='true'>
            {brandLogosLubricantes.map((logo, index) => (
              <div className='carousel-item' key={index}>
                <img
                  className='logo-brand'
                  src={logo}
                  alt={`Brand lubricante duplicate ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='carousel-container'>
          <div className='carousel'>
            {brandLogosFiltros.map((logo, index) => (
              <div className='carousel-item' key={index}>
                <img
                  className='logo-brand'
                  src={logo}
                  alt={`Brand filtro ${index}`}
                />
              </div>
            ))}
          </div>
          <div className='carousel' aria-hidden='true'>
            {brandLogosFiltros.map((logo, index) => (
              <div className='carousel-item' key={index}>
                <img
                  className='logo-brand'
                  src={logo}
                  alt={`Brand filtro duplicate ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsCarousel
