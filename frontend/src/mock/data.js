/**
 * Mock 数据层 — 模拟后端 API 返回
 */

// ---- 统计卡片 ----
export const statsData = [
  {
    key: 'users',
    label: '用户总数',
    value: 2846,
    change: '+12.5%',
    trend: 'up',
    desc: '较上月净增 316 人',
  },
  {
    key: 'active',
    label: '活跃用户',
    value: 1623,
    change: '+8.2%',
    trend: 'up',
    desc: '今日在线 247',
  },
  {
    key: 'new',
    label: '本月新增',
    value: 384,
    change: '+23.1%',
    trend: 'up',
    desc: '本周新增 92 人',
  },
  {
    key: 'visits',
    label: '系统访问',
    value: '12.8K',
    change: '-3.4%',
    trend: 'down',
    desc: '近 7 日累计',
  },
]

// ---- 最近操作日志 ----
export const recentLogs = [
  { id: 1, user: '张明远', action: '新增用户「陈思雨」', time: '3 分钟前', type: 'create' },
  { id: 2, user: '李知秋', action: '修改了系统设置', time: '18 分钟前', type: 'update' },
  { id: 3, user: '王若溪', action: '导出数据报表', time: '42 分钟前', type: 'export' },
  { id: 4, user: '赵子轩', action: '删除过期数据 12 条', time: '1 小时前', type: 'delete' },
  { id: 5, user: '张明远', action: '审核通过用户申请', time: '2 小时前', type: 'approve' },
  { id: 6, user: '林如意', action: '更新了通知模板', time: '3 小时前', type: 'update' },
  { id: 7, user: '李知秋', action: '新增数据分类「华东区」', time: '5 小时前', type: 'create' },
]

// ---- 快捷操作 ----
export const quickActions = [
  { key: 'users', label: '用户名录', description: '查看账号与权限状态', icon: 'user-plus', to: '/users' },
  { key: 'data', label: '业务台账', description: '进入数据管理模块', icon: 'database', to: '/data' },
  { key: 'activity', label: '运行记录', description: '定位到最近操作明细', icon: 'activity', to: '#activity-feed' },
  { key: 'settings', label: '系统章程', description: '查看系统配置入口', icon: 'settings', to: '/settings' },
]

// ---- 最近用户 ----
export const recentUsers = [
  { id: 1, name: '陈思雨', email: 'syu.chen@ruyi.cn', role: '编辑', status: 'active', avatar: '陈', joinAt: '2026-07-14' },
  { id: 2, name: '林风眠', email: 'fm.lin@ruyi.cn', role: '管理员', status: 'active', avatar: '林', joinAt: '2026-07-13' },
  { id: 3, name: '周若水', email: 'rs.zhou@ruyi.cn', role: '观察者', status: 'inactive', avatar: '周', joinAt: '2026-07-12' },
  { id: 4, name: '杨青云', email: 'qy.yang@ruyi.cn', role: '编辑', status: 'active', avatar: '杨', joinAt: '2026-07-10' },
  { id: 5, name: '郑远山', email: 'ys.zheng@ruyi.cn', role: '编辑', status: 'active', avatar: '郑', joinAt: '2026-07-08' },
]

// ---- 系统信息 ----
export const systemInfo = {
  version: 'v1.0.0 · Ruyi',
  uptime: '7 天 14 时 32 分',
  node: '如意 · 青云节点',
  database: 'PostgreSQL 16 · 正常',
}
