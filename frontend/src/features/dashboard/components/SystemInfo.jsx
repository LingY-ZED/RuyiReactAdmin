import { systemInfo } from '../../../mock/data'

const items = [
  { label: '当前版本', key: 'version' },
  { label: '运行时长', key: 'uptime' },
  { label: '主服务节点', key: 'node' },
  { label: '数据服务', key: 'database' },
]

export default function SystemInfo() {
  return (
    <section className="system-ledger" aria-labelledby="system-title">
      <div className="system-ledger-title">
        <p className="eyebrow">System register</p>
        <h2 id="system-title">系统册</h2>
      </div>
      <dl className="system-list">
        {items.map((item, index) => (
          <div key={item.key}>
            <dt><span aria-hidden="true">0{index + 1}</span>{item.label}</dt>
            <dd>{systemInfo[item.key]}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
