import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Notification = ({ type, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-400'
      case 'error':
        return 'bg-red-100 text-red-800 border-red-400'
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-400'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-400'
    }
  }

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg border ${getStyles()} transition-opacity duration-300`}
    >
      <p className='font-semibold'>{message}</p>
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
}

export default Notification
