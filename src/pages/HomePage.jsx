import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function HomePage() {
  useDocumentTitle()

  return (
    <div className="home">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">Open to visitors</p>
          <h1>Care for the visit, and for the stay.</h1>
          <p className="lede">
            {hospital.name} keeps outpatient clinics and inpatient nursing units in the user
            workspace. Guests can read visiting information here. Login opens the modules.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/user">
              Login
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <aside className="hero-panel">
          <p className="eyebrow">Today on campus</p>
          <ul>
            <li>
              <span>Emergency</span>
              <strong>Open 24 hours</strong>
            </li>
            <li>
              <span>Clinics</span>
              <strong>7:00 a.m. – 7:00 p.m.</strong>
            </li>
            <li>
              <span>Visiting</span>
              <strong>10:00 a.m. – 8:00 p.m.</strong>
            </li>
          </ul>
          <p className="panel-note">{hospital.address}</p>
        </aside>
      </section>
    </div>
  )
}
