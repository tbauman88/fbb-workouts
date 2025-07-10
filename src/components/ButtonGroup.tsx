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
  sticky?: boolean
}

type StatusConfig = {
  message: string
  variant: ButtonVariant
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
  width = ButtonWidth.FULL,
  sticky = false
}) => {
  const widthStyles: Record<ButtonWidth, string> = {
    [ButtonWidth.SMALL]: 'w-24',
    [ButtonWidth.MEDIUM]: 'w-32',
    [ButtonWidth.LARGE]: 'w-48',
    [ButtonWidth.FULL]: 'w-full'
  }

  const variantStyles: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500',
    [ButtonVariant.SECONDARY]: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-500',
    [ButtonVariant.TERTIARY]: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 focus:ring-accent-500',
    [ButtonVariant.ERROR]: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
    [ButtonVariant.SUCCESS]: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 focus:ring-accent-500 shadow-lg shadow-accent-500/25',
    [ButtonVariant.DISABLED]: 'bg-gray-100 text-gray-500 cursor-not-allowed',
  }

  const statusConfig: Record<WorkoutStatus, StatusConfig> = {
    [WorkoutStatus.COMPLETED]: {
      message: 'Workout completed successfully!',
      variant: ButtonVariant.SUCCESS,
    },
    [WorkoutStatus.SKIPPED]: {
      message: 'Workout was skipped',
      variant: ButtonVariant.DISABLED,
    },
    [WorkoutStatus.PENDING]: {
      message: 'Mark workout as complete',
      variant: ButtonVariant.PRIMARY,
    },
  }

  const buttonVariant = useMemo(() => statusConfig[status]?.variant ?? variant, [status, variant]);

  const disabledStyles = disabled ? 'cursor-not-allowed opacity-50' : ''
  const baseStyles = 'px-6 py-4 text-base font-semibold capitalize transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const borderStyles = showIconButton ? 'rounded-l-lg' : 'rounded-lg'

  // Enhanced touch targets for mobile
  const touchStyles = 'min-h-[44px] lg:min-h-[48px]'

  const classNames = `
    ${baseStyles}
    ${touchStyles}
    ${widthStyles[width]}
    ${variantStyles[buttonVariant]}
    ${disabledStyles}
    ${borderStyles}
  `.replace(/\s+/g, ' ').trim()

  const Icon = icon

  const containerClasses = sticky
    ? 'fixed bottom-4 left-4 right-4 z-50 lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:z-auto'
    : 'relative'

  return (
    <div className={`${containerClasses} mt-4 mb-8`}>
      <div className="isolate inline-flex rounded-lg shadow-lg w-full">
        <button
          type="button"
          onClick={onButtonClick}
          disabled={disabled}
          className={`ring-1 ring-black/10 focus:z-10 ${classNames}`}
          aria-label={statusConfig[status]?.message}
        >
          <div className="flex items-center justify-center gap-2">
            {children}
          </div>
        </button>

        {showIconButton && (
          <button
            type="button"
            onClick={onIconClick}
            disabled={disabled}
            className={`-ml-px rounded-r-lg bg-white px-4 py-4 text-base font-semibold text-gray-700 ring-1 ring-black/10 hover:bg-gray-50 active:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform active:scale-95 ${touchStyles} ${disabledStyles}`}
            aria-label="Skip workout"
          >
            <Icon aria-hidden="true" className="h-5 w-5 text-gray-500" />
          </button>
        )}
      </div>
    </div>
  )
}
