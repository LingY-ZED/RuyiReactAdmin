import { useState } from 'react'
import { getGreeting, getToday } from '../../../utils/formatters'

export default function WelcomeBar() {
  const [greeting] = useState(getGreeting)
  const [today] = useState(getToday)

  return (
    <section className="welcome-ledger paper-texture" aria-labelledby="welcome-title">
      <div className="welcome-copy">
        <p className="eyebrow">Ruyi administration · 2026</p>
        <h1 id="welcome-title">{greeting}，如意</h1>
        <p className="welcome-summary">今天的系统运行平稳。用户活跃度继续上升，三项待办需要在午后复核。</p>
      </div>
      <div className="welcome-aside">
        <div className="date-block">
          <span className="date-label">今日</span>
          <strong>{today}</strong>
        </div>
        <div className="health-block">
          <span className="health-mark" aria-hidden="true" />
          <div>
            <strong>运行平稳</strong>
            <span>4 个核心服务在线</span>
          </div>
        </div>
      </div>
      <span className="welcome-stamp" aria-hidden="true">如意</span>
    </section>
  )
}
