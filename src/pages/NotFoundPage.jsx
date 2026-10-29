import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function NotFoundPage() {
  useDocumentTitle('Page not found')

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="404"
        title="That page is not on the campus map"
        lede="The address may be out of date. Login opens the module sidebar, or return to the public home page."
      />
      <Link className="btn btn-primary" to="/">
        Back to home
      </Link>
    </article>
  )
}
