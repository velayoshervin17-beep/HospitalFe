import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import { hospital } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function AboutPage() {
  useDocumentTitle('About')

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="Guest"
        title={`About ${hospital.name}`}
        lede="Sherv Hospital is a community campus with outpatient clinics and inpatient nursing units. Those modules open from the user workspace after login."
      />
      <div className="panel prose">
        <p>
          The public pages cover visiting hours, contact numbers, and a sample directory. The
          emergency department, specialty clinics, wards, ICU, operating room, and recovery room
          are listed in the sidebar once you enter as a user.
        </p>
      </div>
      <Link className="btn btn-primary" to="/user">
        Login
      </Link>
    </article>
  )
}
