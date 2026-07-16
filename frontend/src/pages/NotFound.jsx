import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'

export default function NotFound() {
  return (
    <section className="not-found page-enter" aria-labelledby="not-found-title">
      <div className="not-found-code" aria-hidden="true">肆零肆</div>
      <div className="not-found-copy">
        <p className="eyebrow">Page not found · 路径有误</p>
        <h1 id="not-found-title">此页不在现有台账中</h1>
        <p>请检查地址，或返回首页继续查看当前系统状态。</p>
        <Link className="btn btn-primary" to="/dashboard">
          返回首页 <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </section>
  )
}
