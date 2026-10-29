import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner wrap">
        <Link to="/" className="brand">
          <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
            <rect width="40" height="40" rx="12" fill="#e7f6f2" />
            <path
              fill="#0c6b63"
              d="M17.5 8h5v9.5H32v5H22.5V32h-5V22.5H8v-5h9.5V8z"
            />
          </svg>
          <span>
            <strong>{hospital.name}</strong>
            <small>{hospital.tagline}</small>
          </span>
        </Link>
        <div className="header-actions">
          <a className="emergency-link" href={hospital.emergencyPhoneHref}>
            <span>Emergency</span>
            <strong>{hospital.emergencyPhone}</strong>
          </a>
          <Link to="/user" className="login-button">
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
