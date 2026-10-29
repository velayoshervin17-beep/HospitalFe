import PageIntro from '../components/PageIntro.jsx'
import { hospital } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function ContactPage() {
  useDocumentTitle('Contact')

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="Guest"
        title="Contact"
        lede="Use the numbers below for the main desk and for emergencies. A message form is not connected yet."
      />
      <div className="card-grid">
        <article className="service-card">
          <p className="card-kicker">Main desk</p>
          <h3>
            <a href={hospital.mainPhoneHref}>{hospital.mainPhone}</a>
          </h3>
          <p>{hospital.address}</p>
          <p>{hospital.lobbyHours}</p>
        </article>
        <article className="service-card is-alert">
          <p className="card-kicker">Emergency</p>
          <h3>
            <a href={hospital.emergencyPhoneHref}>{hospital.emergencyPhone}</a>
          </h3>
          <p>North emergency entrance, open every hour.</p>
        </article>
        <article className="service-card">
          <p className="card-kicker">Visiting</p>
          <h3>General wards</h3>
          <p>{hospital.visitingHours}</p>
          <p>ICU visiting is arranged with the unit staff.</p>
        </article>
      </div>
    </article>
  )
}
