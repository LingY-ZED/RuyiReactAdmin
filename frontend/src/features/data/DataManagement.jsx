import ModulePlaceholder from '../../components/ModulePlaceholder'

export default function DataManagement() {
  return (
    <ModulePlaceholder
      code="Business register · 业务台账"
      title="数据管理"
      description="归集业务记录，并追踪导入与导出批次。"
      icon="database"
      capabilities={['业务记录检索与筛选', '批次导入校验', '报表导出记录']}
    />
  )
}
