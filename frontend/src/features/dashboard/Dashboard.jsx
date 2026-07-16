import { statsData } from '../../mock/data'
import WelcomeBar from './components/WelcomeBar'
import StatCard from './components/StatCard'
import QuickActions from './components/QuickActions'
import RecentUsers from './components/RecentUsers'
import ActivityLog from './components/ActivityLog'
import SystemInfo from './components/SystemInfo'
import './Dashboard.css'

export default function Dashboard() {
  const [primaryStat, ...supportingStats] = statsData

  return (
    <div className="dashboard page-enter">
      <WelcomeBar />

      <section className="metrics-section" aria-labelledby="metrics-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Operating brief · 近 30 日</p>
            <h2 id="metrics-title">关键指标</h2>
          </div>
          <span className="section-note">数据更新于 10:42</span>
        </header>
        <div className="metrics-layout">
          <StatCard {...primaryStat} iconKey={primaryStat.key} variant="primary" />
          <div className="metrics-stack">
            {supportingStats.map((stat) => (
              <StatCard key={stat.key} {...stat} iconKey={stat.key} />
            ))}
          </div>
        </div>
      </section>

      <QuickActions />

      <section className="operations-grid" aria-label="运营动态">
        <RecentUsers />
        <ActivityLog />
      </section>

      <SystemInfo />
    </div>
  )
}
