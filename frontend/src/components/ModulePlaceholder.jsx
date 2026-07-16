import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

export default function ModulePlaceholder({ code, title, description, icon, capabilities }) {
  return (
    <section className="module-page page-enter" aria-labelledby="module-title">
      <header className="module-heading">
        <p className="eyebrow">{code}</p>
        <h1 id="module-title">{title}</h1>
        <p>{description}</p>
      </header>

      <div className="module-manifest paper-texture">
        <div className="module-symbol" aria-hidden="true">
          <Icon name={icon} size={28} />
          <span>待录</span>
        </div>
        <div className="module-message">
          <p className="eyebrow">Module status · 尚未接入</p>
          <h2>此页尚未连接业务数据</h2>
          <p>导航与页面结构已经就绪。接入真实接口前，这里不会展示虚构记录或提供不可用的操作。</p>
          <Link className="btn btn-primary" to="/dashboard">
            返回首页 <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="module-capabilities">
          <span>计划能力</span>
          <ol>
            {capabilities.map((capability, index) => (
              <li key={capability}>
                <span aria-hidden="true">0{index + 1}</span>
                {capability}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
