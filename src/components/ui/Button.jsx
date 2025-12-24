import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

/**
 * Button Component
 *
 * A reusable button component with two main variants: primary and secondary.
 *
 * Props:
 * - variant: The button style variant ('primary' or 'secondary').
 * - to: The link destination (if using as a NavLink).
 * - onClick: The click handler (if not using as a NavLink).
 * - children: The content inside the button.
 * - className: Additional class names for custom styling.
 * - animation: Whether to include hover/animation effects. Defaults to true.
 */
const Button = ({
  variant = 'primary',
  to = null,
  onClick = null,
  children,
  className = '',
  animation = true,
}) => {
  const baseStyles =
    'text-center text-sm px-5 py-2 rounded-lg font-semibold shadow-lg transition-all duration-200 ease-in-out'

  const variantStyles = {
    primary:
      'bg-button-primary text-button-secondary border border-button-primary hover:bg-accent',
    secondary:
      'border border-button-secondary text-button-secondary hover:bg-button-secondary hover:text-button-primary',
  }

  const animationStyles = animation ? 'hover:scale-105 hover:shadow-xl' : ''

  const combinedStyles =
    `${baseStyles} ${variantStyles[variant]} ${animationStyles} ${className}`.trim()

  if (to) {
    return (
      <NavLink to={to} className={combinedStyles}>
        {children}
      </NavLink>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** The button style variant ('primary' or 'secondary') */
  variant: PropTypes.oneOf(['primary', 'secondary']),

  /** The link destination (if using as a NavLink) */
  to: PropTypes.string,

  /** The click handler (if not using as a NavLink) */
  onClick: PropTypes.func,

  /** The content inside the button */
  children: PropTypes.node.isRequired,

  /** Additional class names for custom styling */
  className: PropTypes.string,

  /** Whether to include hover/animation effects */
  animation: PropTypes.bool,
}

export default Button
