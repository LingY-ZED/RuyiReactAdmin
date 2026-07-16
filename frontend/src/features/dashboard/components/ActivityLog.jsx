import { recentLogs } from '../../../mock/data'

const logTypeMeta = {
  create: { label: '新增', mark: '增' },
  update: { label: '修改', mark: '改' },
  export: { label: '导出', mark: '出' },
  delete: { label: '删除', mark: '删' },
  approve: { label: '审核', mark: '审' },
}

export default function ActivityLog() {
  return (
    <section id="activity-feed" className="ledger-panel activity-panel" aria-labelledby="activity-title">
      <header className="panel-heading">
        <div>
          <p className="eyebrow">Change log · 实时记录</p>
          <h2 id="activity-title">最近操作</h2>
        </div>
        <span className="live-note"><span aria-hidden="true" />实时</span>
      </header>
      <ol className="activity-list">
        {recentLogs.slice(0, 5).map((log) => {
          const meta = logTypeMeta[log.type]
          return (
            <li key={log.id} className="activity-item">
              <span className={`activity-mark activity-mark--${log.type}`} aria-label={meta.label}>{meta.mark}</span>
              <span className="activity-copy">
                <strong>{log.user}</strong>
                <span>{log.action}</span>
              </span>
              <time>{log.time}</time>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
