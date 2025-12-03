import PropTypes from 'prop-types'
import Icon from './Icon'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'

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
  const { theme } = useContext(ThemeContext)

  return (
    <div className='flex items-start'>
      <Icon name={iconName} />
      <div className='ml-4'>
        {link ? (
          <p
            className={`break-all ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                theme === 'dark'
                  ? 'text-blue-400 hover:text-blue-500 hover:font-semibold'
                  : 'text-blue-600 hover:text-blue-700 hover:font-semibold'
              } hover:no-underline `}
            >
              {text}
            </a>
          </p>
        ) : (
          <p
            className={`break-all ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {text}
          </p>
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
