import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import { doctors } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function FindDoctorPage() {
  useDocumentTitle('Find a Doctor')

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="Sample directory"
        title="Find a Doctor"
        lede="These names are placeholders. Login opens the clinic and unit lists where their work sits."
      />
      <div className="card-grid">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="service-card">
            <p className="card-kicker">{doctor.role}</p>
            <h3>{doctor.name}</h3>
            <p>Sample listing for the public directory.</p>
          </article>
        ))}
      </div>
      <p className="guest-note">
        <Link to="/user">Login to open the modules</Link>
      </p>
    </article>
  )
}
