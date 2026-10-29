import { NavLink } from 'react-router-dom'
import { hospital } from '../data/site.js'
import { serviceTree } from '../data/services.js'

function linkClass(isActive) {
  return `side-link${isActive ? ' is-active' : ''}`
}

function SideLinks({ nodes, onNavigate, depth = 0 }) {
  return nodes.map((node) => (
    <li key={node.id} className={depth > 0 ? 'is-nested' : undefined}>
      <NavLink to={node.to} className={({ isActive }) => linkClass(isActive)} onClick={onNavigate}>
        {node.navLabel}
      </NavLink>
      {node.children?.length ? (
        <ul>
          <SideLinks nodes={node.children} depth={depth + 1} onNavigate={onNavigate} />
        </ul>
      ) : null}
    </li>
  ))
}

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidebar${open ? ' is-open' : ''}`} aria-label="User modules">
      <NavLink to="/user" className="side-brand" end onClick={onNavigate}>
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <rect width="40" height="40" rx="12" fill="#e7f6f2" />
          <path fill="#0c6b63" d="M17.5 8h5v9.5H32v5H22.5V32h-5V22.5H8v-5h9.5V8z" />
        </svg>
        <span>
          <strong>{hospital.name}</strong>
          <small>User workspace</small>
        </span>
      </NavLink>
      <nav>
        {serviceTree.map((group) => (
          <section key={group.id} className="side-group">
            <p className="side-label">{group.navLabel}</p>
            <ul>
              <li>
                <NavLink to={group.to} end className={({ isActive }) => linkClass(isActive)} onClick={onNavigate}>
                  Overview
                </NavLink>
              </li>
              <SideLinks nodes={group.children} onNavigate={onNavigate} />
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  )
}
