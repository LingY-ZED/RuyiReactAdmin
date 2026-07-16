import { cn } from '../../utils/cn'

const variants = {
  default: 'rui-card--default',
  quiet: 'rui-card--quiet',
  outlined: 'rui-card--outlined',
}
const paddings = {
  none: 'rui-card--pad-none',
  sm: 'rui-card--pad-sm',
  md: 'rui-card--pad-md',
  lg: 'rui-card--pad-lg',
}

export default function Card({
  variant = 'default', padding = 'md', className, children, ...rest
}) {
  return (
    <div
      className={cn(
        'rui-card',
        variants[variant] ?? variants.default,
        paddings[padding] ?? paddings.md,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

function CardHeader({ className, children }) {
  return <div className={cn('rui-card__header', className)}>{children}</div>
}
function CardBody({ className, children }) {
  return <div className={cn('rui-card__body', className)}>{children}</div>
}
function CardFooter({ className, children }) {
  return <div className={cn('rui-card__footer', className)}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
