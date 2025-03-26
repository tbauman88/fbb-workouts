interface ButtonGroupProps {
  buttonText: string
  icon: React.ElementType
  onButtonClick: () => void
  onIconClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error'
  width?: 'small' | 'medium' | 'large' | 'full'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonText,
  icon,
  onButtonClick,
  onIconClick,
  disabled,
  variant = 'primary',
  width = 'full'
}) => {
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

  const disabledStyles = disabled ? 'cursor-not-allowed' : ''

  // TODO: Update styles
  const classNames = `
    ${baseStyles}
    ${widthStyles[width]}
    ${variantStyles[variant]}
    ${disabledStyles}
  `
  const Icon = icon

  return (
    <div className="my-8 isolate inline-flex rounded-md shadow-xs w-full">
      <button
        type="button"
        onClick={onButtonClick}
        disabled={disabled}
        className={`w-full capitalize rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${disabledStyles}`}
      >
        {buttonText}
      </button>
      <button
        type="button"
        onClick={onIconClick}
        disabled={disabled}
        className={`-ml-px rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${disabledStyles}`}
      >
        <Icon aria-hidden="true" className="-ml-0.5 size-5 text-gray-400" />
      </button>
    </div>
  )
}
