import { cn } from '../../utils/cn'

const colorMap = {
  blue: 'badge-blue', green: 'badge-green', amber: 'badge-amber',
  red: 'badge-red', indigo: 'badge-indigo', gold: 'badge-gold',
  neutral: '',
}

export default function Badge({
  variant = 'blue', size = 'md', dot, className, children,
}) {
  return (
    <span
      className={cn(
        'badge',
        colorMap[variant],
        size === 'sm' && 'badge-sm',
        size === 'lg' && 'badge-lg',
        dot && 'badge-dot',
        className,
      )}
    >
      {children}
    </span>
  )
}
