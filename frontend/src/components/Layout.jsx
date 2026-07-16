import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './ui/Icon'
import './Layout.css'

const navItems = [
  { path: '/dashboard', label: '概览', fullLabel: '首页概览', icon: 'dashboard', code: '01' },
  { path: '/users', label: '用户', fullLabel: '用户管理', icon: 'users', code: '02' },
  { path: '/data', label: '数据', fullLabel: '数据管理', icon: 'data', code: '03' },
  { path: '/settings', label: '设置', fullLabel: '系统设置', icon: 'settings', code: '04' },
]

const pageMeta = {
  '/dashboard': { title: '首页概览', code: '工作台 · 壹' },
  '/users': { title: '用户管理', code: '组织名录 · 贰' },
  '/data': { title: '数据管理', code: '业务台账 · 叁' },
  '/settings': { title: '系统设置', code: '系统章程 · 肆' },
}

function Navigation({ className, ariaLabel }) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-entry ${isActive ? 'is-active' : ''}`}
          title={item.fullLabel}
        >
          <span className="nav-index" aria-hidden="true">{item.code}</span>
          <Icon name={item.icon} size={20} />
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const meta = pageMeta[pathname] ?? { title: '页面未找到', code: '如意管理系统' }

  useEffect(() => {
    document.title = `${meta.title} · 如意管理系统`
  }, [meta.title])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">跳到主要内容</a>

      <aside className="side-rail">
        <NavLink className="brand-mark" to="/dashboard" aria-label="如意管理系统首页">
          <span className="brand-seal" aria-hidden="true">如</span>
          <span className="brand-caption">如意</span>
        </NavLink>
        <Navigation className="rail-nav" ariaLabel="主导航" />
        <div className="rail-foot" aria-hidden="true">
          <span>RY</span>
          <span className="rail-foot-line" />
          <span>26</span>
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div className="topbar-heading">
            <p>{meta.code}</p>
            <span>{meta.title}</span>
          </div>
          <div className="topbar-meta">
            <div className="system-state">
              <span className="system-state-mark" aria-hidden="true" />
              <span>服务运行平稳</span>
            </div>
            <div className="operator">
              <span className="operator-avatar" aria-hidden="true">如</span>
              <span className="operator-copy">
                <strong>林如意</strong>
                <small>系统管理员</small>
              </span>
            </div>
          </div>
        </header>

        <main id="main-content" className="main-content" tabIndex="-1">
          <Outlet />
        </main>
      </div>

      <Navigation className="mobile-nav" ariaLabel="移动端主导航" />
    </div>
  )
}
