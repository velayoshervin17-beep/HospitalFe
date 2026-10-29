import { Link } from 'react-router-dom'
import { guestLinks, hospital } from '../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h2>{hospital.name}</h2>
          <p>{hospital.address}</p>
          <p>
            <a href={hospital.mainPhoneHref}>{hospital.mainPhone}</a>
          </p>
          <p>
            Emergency <a href={hospital.emergencyPhoneHref}>{hospital.emergencyPhone}</a>
          </p>
          <p>{hospital.lobbyHours}</p>
        </div>
        <div>
          <h2>Visit</h2>
          <ul>
            {guestLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/user">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {year} {hospital.name}. Clinical modules open after login.</p>
        <p>{hospital.visitingHours}</p>
      </div>
    </footer>
  )
}
