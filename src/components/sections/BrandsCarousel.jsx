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
import repsol_dark from '../../assets/brands/logo-repsol-dark.svg'
import fleetguard_dark from '../../assets/brands/logo-fleetguard-dark.svg'
import wv_dark from '../../assets/brands/logo-wb-dark.svg'
import hengst_dark from '../../assets/brands/logo-hengst-dark.svg'
import millard_dark from '../../assets/brands/logo-millard-dark.svg'
import '../../styles/BrandsCarousel.css'
import Section from '../ui/Section'

const BrandsCarousel = () => {
  const { theme } = useContext(ThemeContext)

  const brandLogosLubricantes = [
    castrol,
    chevron,
    liquimoly,
    mobil,
    motul,
    prestone,
    theme === 'dark' ? repsol_dark : repsol,
    shell,
  ]

  const brandLogosFiltros = [
    mann,
    theme === 'dark' ? millard_dark : millard,
    sakura,
    theme === 'dark' ? fleetguard_dark : fleetguard,
    theme === 'dark' ? wv_dark : wb,
    theme === 'dark' ? hengst_dark : hengst,
    ihp,
  ]

  return (
    <Section
      id='marcas'
      className={`pt-20 pb-10`}
      variant='primary'
      title='Nuestros Proveedores'
      subtitle='Trabajamos con  una gran variedad de marcas reconocidas en el mercado'
      columnsNumber={1}
      components={[
        <div key={0} className=' mx-auto'>
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
        </div>,
      ]}
    ></Section>
  )
}

export default BrandsCarousel
