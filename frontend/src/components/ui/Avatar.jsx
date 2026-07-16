import { cn } from '../../utils/cn'

const sizeMap = { sm: 'avatar-sm', md: 'avatar-md', lg: 'avatar-lg', xl: 'avatar-xl' }

export default function Avatar({
  src, name = '', size = 'md', status, className,
}) {
  const initial = name ? name.charAt(0) : '?'
  return (
    <span className={cn('avatar', sizeMap[size], status === 'online' && 'avatar-online', className)}>
      {src ? <img src={src} alt={name} /> : initial}
    </span>
  )
}
