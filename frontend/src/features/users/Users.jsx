import ModulePlaceholder from '../../components/ModulePlaceholder'

export default function Users() {
  return (
    <ModulePlaceholder
      code="People register · 组织名录"
      title="用户管理"
      description="集中查看账号、角色与组织归属。"
      icon="users"
      capabilities={['用户资料与组织关系', '角色和权限状态', '账号启停记录']}
    />
  )
}
