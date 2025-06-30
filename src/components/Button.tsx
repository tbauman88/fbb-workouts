interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error'
  width?: 'small' | 'medium' | 'large' | 'full'
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, variant = 'primary', width = 'full' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold focus-ring'

  const variantStyles = {
    primary: 'gradient-primary text-white hover:shadow-medium',
    secondary: 'gradient-secondary text-white hover:shadow-medium',
    tertiary: 'gradient-accent text-white hover:shadow-medium',
    error: 'bg-red-600 text-white hover:bg-red-700'
  }

  const widthStyles = {
    small: 'w-24',
    medium: 'w-32',
    large: 'w-48',
    full: 'w-full'
  }

  const interactiveStyles = disabled ? '' : 'interactive'
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const classNames = `
    ${baseStyles}
    ${widthStyles[width]}
    ${variantStyles[variant]}
    ${interactiveStyles}
    ${disabledStyles}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button onClick={onClick} disabled={disabled} className={classNames}>
      {text}
    </button>
  )
}
