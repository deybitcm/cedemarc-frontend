import PropTypes from 'prop-types'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'

const Card = ({ title, subtitle, icon, externalComponent, className = '' }) => {
  const { theme } = useContext(ThemeContext)

  const themeClass =
    theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'

  const themeClassTitle = theme === 'dark' ? 'text-white' : 'text-dark'

  const themeClassSubtitle =
    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  return (
    <div
      className={`card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 ${themeClass} ${className}`.trim()}
    >
      {externalComponent ? (
        <div className='flex justify-center mb-4'>{externalComponent}</div>
      ) : (
        icon && <div className='flex justify-center mb-4'>{icon}</div>
      )}
      <h3 className={`text-xl font-bold text-center mb-2 ${themeClassTitle}`}>
        {title}
      </h3>
      <p className={`text-center ${themeClassSubtitle}`}>{subtitle}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.node,
  externalComponent: PropTypes.node,
  className: PropTypes.string,
}

export default Card
