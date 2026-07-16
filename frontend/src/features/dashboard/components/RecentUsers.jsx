import { Link } from 'react-router-dom'
import Avatar from '../../../components/ui/Avatar'
import Icon from '../../../components/ui/Icon'
import { recentUsers } from '../../../mock/data'

function StatusTag({ status }) {
  const active = status === 'active'
  return (
    <span className={`status-label ${active ? 'status-label--active' : 'status-label--inactive'}`}>
      <span aria-hidden="true" />
      {active ? '正常' : '停用'}
    </span>
  )
}

export default function RecentUsers() {
  return (
    <section className="ledger-panel recent-users" aria-labelledby="recent-users-title">
      <header className="panel-heading">
        <div>
          <p className="eyebrow">New members · 最近录入</p>
          <h2 id="recent-users-title">新加入用户</h2>
        </div>
        <Link className="text-link" to="/users">
          查看名录 <Icon name="arrow-right" size={15} />
        </Link>
      </header>
      <div className="table-wrap" tabIndex="0" aria-label="最近加入用户表格，可横向滚动">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">用户</th>
              <th scope="col">角色</th>
              <th scope="col">状态</th>
              <th scope="col">加入时间</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <Avatar name={user.name} className={`avatar-tone-${user.id % 3}`} />
                    <span>
                      <strong>{user.name}</strong>
                      <small>{user.email}</small>
                    </span>
                  </div>
                </td>
                <td><span className="role-label">{user.role}</span></td>
                <td><StatusTag status={user.status} /></td>
                <td className="date-cell">{user.joinAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
