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
 * - columns: Number of columns (1, 2, or 3). Defaults to 1.
 * - className: Additional class names for custom styling.
 * - variant: Determines the section style ("primary" or "secondary"). Defaults to "primary".
 * - title: Optional title to display at the top of the section.
 * - subtitle: Optional subtitle to display below the title.
 */
const Section = ({
  id,
  children,
  columns = 1,
  className = '',
  variant = 'primary',
  title,
  subtitle,
}) => {
  const { theme } = useContext(ThemeContext)

  const columnClass =
    columns === 2
      ? 'ui-section--two-columns'
      : columns === 3
      ? 'ui-section--three-columns'
      : ''

  const themeClass =
    variant === 'primary'
      ? theme === 'dark'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900'
      : theme === 'dark'
      ? 'bg-gray-800 text-white'
      : 'bg-gray-100 text-gray-900'

  const themeTextClassTitle =
    variant === 'primary'
      ? theme === 'dark'
        ? 'text-white'
        : 'text-dark'
      : theme === 'dark'
      ? 'text-white'
      : 'text-dark'

  const themeTextClassSubtitle =
    variant === 'primary'
      ? theme === 'dark'
        ? 'text-gray-300'
        : 'text-gray-600'
      : theme === 'dark'
      ? 'text-gray-300'
      : 'text-gray-600'

  return (
    <section
      id={id}
      className={`relative flex flex-col items-center justify-center overflow-hidden ${columnClass} ${themeClass} ${className}`.trim()}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-center'>
        {title && (
          <h2
            className={` text-3xl font-extrabold sm:text-4xl animate-fade-in ${themeTextClassTitle}`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={` mt-4 text-xl animate-fade-in ${themeTextClassSubtitle}`}
            style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  /** Content to display inside the section */
  children: PropTypes.node.isRequired,

  /** Number of columns (1, 2, or 3). Defaults to 1. */
  columns: PropTypes.oneOf([1, 2, 3]).isRequired,

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
