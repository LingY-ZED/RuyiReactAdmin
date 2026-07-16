import ModulePlaceholder from '../../components/ModulePlaceholder'

export default function Settings() {
  return (
    <ModulePlaceholder
      code="System charter · 系统章程"
      title="系统设置"
      description="维护系统参数、通知规则与安全策略。"
      icon="settings"
      capabilities={['基础参数维护', '通知与审计规则', '安全策略配置']}
    />
  )
}
