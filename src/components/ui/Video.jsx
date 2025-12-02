import PropTypes from 'prop-types'

/**
 * Video Component
 *
 * A reusable video component with customizable opacity.
 *
 * Props:
 * - src: The video source URL or local path.
 * - opacity: The opacity of the video overlay (0 to 100%). Defaults to 70.
 * - className: Additional class names for custom styling.
 * - overlay: Whether to include an overlay. Defaults to true.
 */
const Video = ({ src, opacity = 70, className = '', overlay = true }) => {
  const overlayStyle = {
    backgroundColor: 'black',
    opacity: opacity / 100,
  }

  // Determine if the source is external or local
  const isExternal = src.startsWith('http://') || src.startsWith('https://')

  // Resolve local paths relative to the public folder
  const resolvedSrc = isExternal
    ? src
    : `${src.startsWith('/') ? src : `/${src}`}`

  return (
    <div className={`relative ${className}`.trim()}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='relative top-0 left-0 w-full h-full object-cover'
      >
        <source src={resolvedSrc} type='video/mp4' />
      </video>
      {overlay && <div className='absolute inset-0' style={overlayStyle}></div>}
    </div>
  )
}

Video.propTypes = {
  /** The video source URL or local path */
  src: PropTypes.string.isRequired,

  /** The opacity of the video overlay (0 to 100%). Defaults to 70. */
  opacity: PropTypes.number,

  /** Additional class names for custom styling */
  className: PropTypes.string,

  /** Whether to include an overlay */
  overlay: PropTypes.bool,
}

export default Video
