import { useMemo } from "react"
import { WorkoutStatus } from "types"

enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  ERROR = 'error',
  SUCCESS = 'success',
  DISABLED = 'disabled',
}

enum ButtonWidth {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULL = 'full'
}

interface ButtonGroupProps {
  children: React.ReactNode
  icon: React.ElementType
  onButtonClick: () => void
  onIconClick: () => void
  status: WorkoutStatus
  showIconButton?: boolean
  disabled?: boolean
  variant?: ButtonVariant
  width?: ButtonWidth
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  icon,
  onButtonClick,
  onIconClick,
  disabled,
  status,
  showIconButton = false,
  variant = ButtonVariant.PRIMARY,
  width = ButtonWidth.FULL
}) => {
  const widthStyles = {
    [ButtonWidth.SMALL]: 'w-24',
    [ButtonWidth.MEDIUM]: 'w-32',
    [ButtonWidth.LARGE]: 'w-48',
    [ButtonWidth.FULL]: 'w-full'
  }

  const variantStyles = {
    [ButtonVariant.PRIMARY]: 'bg-blue-600 text-white hover:bg-blue-700',
    [ButtonVariant.SECONDARY]: 'bg-gray-600 text-white hover:bg-gray-700',
    [ButtonVariant.TERTIARY]: 'bg-green-600 text-white hover:bg-green-700',
    [ButtonVariant.ERROR]: 'bg-red-600 text-white hover:bg-red-700',
    [ButtonVariant.SUCCESS]: 'bg-green-50 text-green-700 hover:bg-green-100',
    [ButtonVariant.DISABLED]: 'bg-gray-50 text-gray-700 hover:bg-gray-100',
  }

  const statusVariantMapping = {
    [WorkoutStatus.COMPLETED]: ButtonVariant.SUCCESS,
    [WorkoutStatus.SKIPPED]: ButtonVariant.DISABLED,
    [WorkoutStatus.PENDING]: ButtonVariant.PRIMARY,
  };

  const buttonVariant = useMemo(() => statusVariantMapping[status] ?? variant, [status, variant]);

  const disabledStyles = disabled ? 'cursor-not-allowed' : ''
  const baseStyles = 'px-3 py-2 text-sm font-semibold capitalize transition duration-200'
  const borderStyles = showIconButton ? 'rounded-l-md' : 'rounded-md'

  const classNames = `
    ${baseStyles}
    ${widthStyles[width]}
    ${variantStyles[buttonVariant]}
    ${disabledStyles}
    ${borderStyles}
  `

  const Icon = icon

  return (
    <div className="my-8 isolate inline-flex rounded-md shadow-xs w-full">
      <button
        type="button"
        onClick={onButtonClick}
        disabled={disabled}
        className={`ring-1 ring-gray-300 ring-inset focus:z-10 ${classNames}`}
      >
        {children}
      </button>
      {showIconButton && (
        <button
          type="button"
          onClick={onIconClick}
          disabled={disabled}
          className={`-ml-px rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${disabledStyles}`}
        >
          <Icon aria-hidden="true" className="-ml-0.5 size-5 text-gray-400" />
        </button>
      )}
    </div>
  )
}
