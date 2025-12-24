import PropTypes from 'prop-types'
import Icon from './Icon'

/**
 * ContactInfo Component
 *
 * A reusable component for displaying contact information with an icon.
 *
 * Props:
 * - iconName: The name of the icon to display.
 * - text: The text content to display.
 * - link: Optional link URL for clickable text.
 */
const ContactInfo = ({ iconName, text, link }) => {
  return (
    <div className='flex items-start'>
      <Icon name={iconName} />
      <div className='ml-4'>
        {link ? (
          <p className='break-all text-text-primary'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-link-accent hover:text-link-accent-hover hover:font-semibold hover:no-underline'
            >
              {text}
            </a>
          </p>
        ) : (
          <p className='break-all text-text-primary'>{text}</p>
        )}
      </div>
    </div>
  )
}

ContactInfo.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ContactInfo
