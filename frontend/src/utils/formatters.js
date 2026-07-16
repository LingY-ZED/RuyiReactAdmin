/**
 * Formatters — Number, Date, and text formatting utilities
 */

/** Format number with commas: 2846 -> "2,846" */
export function formatNumber(n) {
  if (n == null) return '—'
  return Number(n).toLocaleString('zh-CN')
}

/** Format date string to zh-CN locale: "2026年7月15日" */
export function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Relative time in Chinese: 3 分钟前 / 2 小时前 */
export function relativeTime(dateStr) {
  if (!dateStr) return '—'
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diffMin = Math.floor((now - then) / 60000)

  if (diffMin < 1) return '刚刚'
  if (diffMin < 60) return `${diffMin} 分钟前`
  const diffHr = Math.floor(diffMin / 60)
  if (diffHr < 24) return `${diffHr} 小时前`
  const diffDay = Math.floor(diffHr / 24)
  if (diffDay < 30) return `${diffDay} 天前`
  return formatDate(dateStr)
}

/** Greeting based on time of day */
export function getGreeting() {
  const h = new Date().getHours()
  if (h < 6) return '夜深了'
  if (h < 9) return '早上好'
  if (h < 12) return '上午好'
  if (h < 14) return '中午好'
  if (h < 18) return '下午好'
  return '晚上好'
}

/** Today's date in Chinese format */
export function getToday() {
  return new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
}
