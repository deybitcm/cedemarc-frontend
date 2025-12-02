import PropTypes from 'prop-types'

const CardGrid = ({ children, columns, className = '' }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mx-40  gap-8 lg:grid-cols-2 card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-8 ${className}`.trim()}
    >
      {children}
    </div>
  )
}

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default CardGrid
