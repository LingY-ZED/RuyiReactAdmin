import { cn } from '../../utils/cn'
import Icon from './Icon'

const variants = {
  primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost',
  danger: 'btn-danger', outline: 'btn-outline',
}
const sizes = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg', xl: 'btn-xl' }

export default function Button({
  variant = 'primary', size = 'md', icon, iconPosition = 'left',
  loading, disabled, block, className, children, ...rest
}) {
  return (
    <button
      className={cn(
        'btn', variants[variant] ?? variants.primary, sizes[size] ?? sizes.md,
        block && 'btn-block',
        !children && icon && 'btn-icon',
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="btn-spinner" />
      ) : icon && iconPosition === 'left' ? (
        <Icon name={icon} size={size === 'sm' ? 14 : 16} />
      ) : null}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <Icon name={icon} size={size === 'sm' ? 14 : 16} />
      )}
    </button>
  )
}
