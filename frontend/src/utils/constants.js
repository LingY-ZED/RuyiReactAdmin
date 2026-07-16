/**
 * Constants — Shared navigation, breadcrumbs, and app configuration
 */

export const NAV_ITEMS = [
  { path: '/dashboard', label: '首页概览', icon: 'dashboard' },
  { path: '/users',     label: '用户管理', icon: 'users' },
  { path: '/data',      label: '数据管理', icon: 'data' },
  { path: '/settings',  label: '系统设置', icon: 'settings' },
]

export const BREADCRUMB_MAP = {
  '/dashboard': '首页概览',
  '/users':     '用户管理',
  '/data':      '数据管理',
  '/settings':  '系统设置',
}

/** Icon names available in the Icon component */
export const ICON_NAMES = [
  'dashboard', 'users', 'data', 'settings',
  'bell', 'search', 'logout', 'menu',
  'close', 'plus', 'edit', 'trash',
  'chevron-down', 'chevron-right', 'external-link',
  'calendar', 'chart', 'filter', 'more-horizontal',
  'check', 'upload', 'download',
]

/** Breakpoints mirroring CSS media queries */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}
