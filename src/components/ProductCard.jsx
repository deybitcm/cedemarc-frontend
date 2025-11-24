import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white shadow rounded-lg overflow-hidden'>
      <div className='h-40 bg-gray-100 flex items-center justify-center'>
        {/* Placeholder image */}
        <span className='text-gray-400'>Imagen</span>
      </div>
      <div className='p-4'>
        <h3 className='font-bold text-lg text-gray-900'>{product.name}</h3>
        <p className='text-sm text-gray-600 mt-1'>{product.description}</p>
        <div className='mt-2 text-sm text-gray-500'>
          {product.brand && (
            <span className='mr-3'>Marca: {product.brand}</span>
          )}
          {product.viscosity && <span>Viscosidad: {product.viscosity}</span>}
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-blue-600 font-semibold'>${product.price}</span>
          <button className='bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700'>
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string,
    brand: PropTypes.string,
    viscosity: PropTypes.string,
  }).isRequired,
}
