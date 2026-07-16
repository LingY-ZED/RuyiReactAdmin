/**
 * cn — Classname merger utility
 * Filters falsy values and joins truthy strings with spaces.
 *
 * Usage: cn('btn', isActive && 'btn--active', className)
 *        => 'btn btn--active extra'
 */
export function cn(...args) {
  return args
    .flat(Infinity)
    .filter(x => typeof x === 'string' && x.length > 0)
    .join(' ')
}
