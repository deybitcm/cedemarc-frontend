import PropTypes from 'prop-types'

/**
 * Image Component
 *
 * A reusable image component with customizable styles.
 *
 * Props:
 * - src: The image source URL or local path.
 * - alt: The alternative text for the image.
 * - className: Additional class names for custom styling.
 * - style: Inline styles for the image.
 * - width: The width of the image.
 * - height: The height of the image.
 */
const Image = ({ src, alt, className = '', style = {}, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`mx-auto ${className}`.trim()}
      style={{ ...style, width, height }}
    />
  )
}

Image.propTypes = {
  /** The image source URL or local path */
  src: PropTypes.string.isRequired,

  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,

  /** Additional class names for custom styling */
  className: PropTypes.string,

  /** Inline styles for the image */
  style: PropTypes.object,

  /** The width of the image */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The height of the image */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Image
