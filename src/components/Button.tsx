interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error'
  width?: 'small' | 'medium' | 'large' | 'full'
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, variant = 'primary', width = 'full' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition duration-200'

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    tertiary: 'bg-green-600 text-white hover:bg-green-700',
    error: 'bg-red-600 text-white hover:bg-red-700'
  }

  const widthStyles = {
    small: 'w-24',
    medium: 'w-32',
    large: 'w-48',
    full: 'w-full'
  }

  const disabledStyles = disabled ? 'bg-gray-400 text-white cursor-not-allowed' : ''

  const classNames = `
    ${baseStyles}
    ${widthStyles[width]}
    ${variantStyles[variant]}
    ${disabledStyles}
  `

  return (
    <button onClick={onClick} disabled={disabled} className={classNames}>
      {text}
    </button>
  )
}
