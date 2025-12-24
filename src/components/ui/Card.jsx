import PropTypes from 'prop-types'

const Card = ({ title, subtitle, icon, externalComponent, className = '' }) => {
  return (
    <div
      className={`card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 bg-bg-card text-text-primary ${className}`.trim()}
    >
      {externalComponent ? (
        <div className='flex justify-center mb-4'>{externalComponent}</div>
      ) : (
        icon && <div className='flex justify-center mb-4'>{icon}</div>
      )}
      <h3 className='text-xl font-bold text-center mb-2 text-text-primary'>
        {title}
      </h3>
      <p className='text-center text-text-secondary'>{subtitle}</p>
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
