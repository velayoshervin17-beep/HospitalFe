import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import { collectLeaves, serviceTree } from '../data/services.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function AppointmentsPage() {
  useDocumentTitle('Appointments')
  const outpatient = serviceTree.find((group) => group.id === 'outpatient')
  const clinics = collectLeaves(outpatient?.children ?? [])

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="Guest"
        title="Appointments"
        lede="Online booking is not built yet. Clinic hours are listed here. Login opens the live unit lists."
      />
      <div className="card-grid">
        {clinics.map((clinic) => (
          <article key={clinic.id} className="service-card">
            <h3>{clinic.title}</h3>
            <p>{clinic.hours}</p>
            <p>{clinic.location}</p>
          </article>
        ))}
      </div>
      <p className="guest-note">
        <Link to="/user">Login to open the modules</Link>
      </p>
    </article>
  )
}
