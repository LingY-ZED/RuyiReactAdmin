import { cn } from '../../utils/cn'

export default function Divider({ variant = 'plain', label, className }) {
  if (variant === 'ornament') {
    return (
      <div className={cn('ornament-divider', className)}>
        <span className="diamond">◇</span>
      </div>
    )
  }
  return (
    <div className={cn('rui-divider', className)}>
      {label && <span className="rui-divider__label">{label}</span>}
    </div>
  )
}
