import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

function PromotionModal({ imageSrc, mobileImageSrc, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    onClose && onClose()
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, isVisible])

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='relative max-w-4xl mx-auto  rounded-lg shadow-lg overflow-hidden p-6'>
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 bg-white bg-opacity-80 rounded-full w-8 h-8 shadow-lg text-black hover:text-gray-700 text-lg font-bold flex items-center justify-center'
          aria-label='Cerrar promoción'
        >
          ✕
        </button>
        <img
          src={mobileImageSrc}
          alt='Promoción vigente'
          className='block md:hidden w-full h-auto'
        />
        <img
          src={imageSrc}
          alt='Promoción vigente'
          className='hidden md:block w-full h-auto'
        />
      </div>
    </div>
  )
}

PromotionModal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  mobileImageSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func,
}

export default PromotionModal
