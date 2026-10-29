import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'
import { guestLinks, homeLink } from '../data/site.js'

function linkClass(isActive) {
  return `appbar-link${isActive ? ' is-active' : ''}`
}

export default function AppBar() {
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openPath, setOpenPath] = useState(pathname)

  if (openPath !== pathname) {
    setOpenPath(pathname)
    setMenuOpen(false)
  }

  if (isAuthenticated) return null

  return (
    <nav className={`appbar${menuOpen ? ' is-open' : ''}`} aria-label="Guest">
      <div className="appbar-inner wrap">
        <span className="guest-pill">Guest</span>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="guest-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="menu-bars" aria-hidden="true" />
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <ul id="guest-menu" className="appbar-list">
          <li>
            <NavLink to={homeLink.to} end className={({ isActive }) => linkClass(isActive)}>
              {homeLink.label}
            </NavLink>
          </li>
          {guestLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => linkClass(isActive)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
