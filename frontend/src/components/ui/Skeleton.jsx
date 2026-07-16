import { cn } from '../../utils/cn'

export default function Skeleton({
  variant = 'text', count = 1, className,
}) {
  const items = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={cn(
        'skeleton',
        variant === 'text' && 'skeleton-text',
        variant === 'avatar' && 'skeleton-avatar',
        variant === 'card' && 'skeleton-card',
        variant === 'button' && 'skeleton-button',
        className,
      )}
    />
  ))
  return variant === 'text' && count > 1
    ? <div className="skeleton-row">{items}</div>
    : <>{items}</>
}
