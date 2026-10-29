import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

export default function UserLayout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [openPath, setOpenPath] = useState(pathname)

  if (openPath !== pathname) {
    setOpenPath(pathname)
    setOpen(false)
  }

  return (
    <div className={`user-shell${open ? ' is-nav-open' : ''}`}>
      <Sidebar open={open} onNavigate={() => setOpen(false)} />
      {open ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close modules"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <div className="user-main">
        <header className="user-top">
          <button
            type="button"
            className="menu-toggle user-menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-bars" aria-hidden="true" />
            Modules
          </button>
          <p className="user-who">
            <strong>Jordan Lee</strong>
            <span>Floor user</span>
          </p>
          <Link className="text-link" to="/">
            Public site
          </Link>
        </header>
        <Outlet />
      </div>
    </div>
  )
}
