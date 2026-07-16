import Icon from '../../../components/ui/Icon'

const metricMeta = {
  users: { icon: 'users', index: '壹', trace: '2,36 18,31 32,33 48,22 64,24 80,15 98,10' },
  active: { icon: 'activity', index: '贰', trace: '2,31 18,29 34,21 50,24 66,13 82,17 98,8' },
  new: { icon: 'user-plus', index: '叁', trace: '2,34 18,31 34,27 50,28 66,18 82,12 98,14' },
  visits: { icon: 'chart', index: '肆', trace: '2,12 18,17 34,14 50,22 66,19 82,29 98,27' },
}

export default function StatCard({ label, value, change, trend, desc, iconKey, variant }) {
  const meta = metricMeta[iconKey] ?? metricMeta.users
  const formattedValue = typeof value === 'number' ? value.toLocaleString('zh-CN') : value

  return (
    <article className={`metric-card ${variant === 'primary' ? 'metric-card--primary' : ''}`}>
      <div className="metric-topline">
        <span className="metric-index">{meta.index}</span>
        <span className="metric-icon"><Icon name={meta.icon} size={19} /></span>
        <span className={`metric-change metric-change--${trend}`}>
          {trend === 'up' ? '上升' : '回落'} {change.replace(/[+-]/, '')}
        </span>
      </div>
      <div className="metric-body">
        <div>
          <p className="metric-label">{label}</p>
          <strong className="metric-value">{formattedValue}</strong>
        </div>
        <svg className="metric-trace" viewBox="0 0 100 42" aria-hidden="true" preserveAspectRatio="none">
          <polyline points={meta.trace} />
        </svg>
      </div>
      <p className="metric-description">{desc}</p>
    </article>
  )
}
