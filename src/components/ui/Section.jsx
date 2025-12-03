import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import PropTypes from 'prop-types'
import '../../styles/Section.css'

/**
 * Section Component
 *
 * A reusable section component that supports up to 3 columns and adapts to the selected theme.
 *
 * Props:
 * - children: The content to display inside the section.
 * - className: Additional class names for custom styling.
 * - variant: Determines the section style ("primary" or "secondary"). Defaults to "primary".
 * - components: A list of JSX components to render as columns. Maximum of 3 components.
 * - title: Optional title to display at the top of the section.
 * - subtitle: Optional subtitle to display below the title.
 */
const Section = ({
  id,
  components = [],
  className = '',
  variant = 'primary',
  title,
  subtitle,
  columnsNumber = 1,
}) => {
  const { theme } = useContext(ThemeContext)

  const themeClass =
    variant === 'primary'
      ? theme === 'dark'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900'
      : theme === 'dark'
      ? 'bg-gray-800 text-white'
      : 'bg-gray-100 text-gray-900'

  const columnClass = `grid grid-cols-1 sm:grid-cols-${columnsNumber} gap-4` // Adjust for single column on small devices and dynamic columns on larger screens

  return (
    <section
      id={id}
      className={`relative flex flex-col items-center overflow-hidden ${themeClass} ${className}`.trim()}
    >
      {title && (
        <h2
          className={`text-3xl font-extrabold sm:text-4xl animate-fade-in ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-xl text-center lg:text-2xl  animate-fade-in ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {subtitle}
        </p>
      )}
      <div className={`w-full h-full ${columnClass}`}>
        {components.map((Component, index) => (
          <div key={index}>{Component}</div>
        ))}
      </div>
    </section>
  )
}

Section.propTypes = {
  columnsNumber: PropTypes.oneOf([1, 2, 3]),
  id: PropTypes.string,
  /** A list of JSX components to render as columns. Maximum of 3 components. */
  components: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  /** Additional class names for custom styling */
  className: PropTypes.string,

  /** Determines the section style ("primary" or "secondary"). Defaults to "primary". */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Optional title to display at the top of the section */
  title: PropTypes.string,

  /** Optional subtitle to display below the title */
  subtitle: PropTypes.string,
}

export default Section
