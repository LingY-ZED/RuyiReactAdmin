import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon'
import { quickActions } from '../../../mock/data'

function ActionLink({ action, index }) {
  const content = (
    <>
      <span className="action-number" aria-hidden="true">0{index + 1}</span>
      <span className="action-icon"><Icon name={action.icon} size={20} /></span>
      <span className="action-copy">
        <strong>{action.label}</strong>
        <small>{action.description}</small>
      </span>
      <Icon name="arrow-right" size={17} className="action-arrow" />
    </>
  )

  if (action.to.startsWith('#')) {
    return <a className="action-entry" href={action.to}>{content}</a>
  }

  return <Link className="action-entry" to={action.to}>{content}</Link>
}

export default function QuickActions() {
  return (
    <section className="actions-section" aria-labelledby="actions-title">
      <header className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Direct access · 常用入口</p>
          <h2 id="actions-title">快捷前往</h2>
        </div>
      </header>
      <div className="actions-list">
        {quickActions.map((action, index) => (
          <ActionLink key={action.key} action={action} index={index} />
        ))}
      </div>
    </section>
  )
}
