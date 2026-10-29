import { Link } from 'react-router-dom'
import DataTable from './DataTable.jsx'
import PageIntro from './PageIntro.jsx'
import { serviceRecords } from '../data/records.js'
import { getBreadcrumbs, getService } from '../data/services.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function ModulePage({ id }) {
  const service = getService(id)
  const records = serviceRecords[id]
  useDocumentTitle(service?.title ?? 'Page not found')

  if (!service) {
    return (
      <article className="page wrap">
        <PageIntro
          eyebrow="Missing page"
          title="This service is not listed"
          lede="Choose a module from the sidebar."
        />
        <Link className="btn btn-primary" to="/user">
          Back to workspace
        </Link>
      </article>
    )
  }

  const parent = service.parentId ? getService(service.parentId) : null
  const breadcrumbs = getBreadcrumbs(service.id)

  return (
    <article className="page wrap">
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/user">Workspace</Link>
          </li>
          {breadcrumbs.slice(1).map((crumb, index, list) => {
            const isCurrent = index === list.length - 1
            return (
              <li key={crumb.to}>
                {isCurrent ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <Link to={crumb.to}>{crumb.label}</Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>

      <PageIntro eyebrow={parent ? parent.title : 'Module'} title={service.title} lede={service.lede}>
        <div className="meta-row">
          <span className="meta-pill">{service.hours}</span>
          <span className="meta-pill">{service.location}</span>
        </div>
      </PageIntro>

      {records ? (
        <section>
          <h2 className="section-title">{records.title}</h2>
          <DataTable columns={records.columns} rows={records.rows} />
        </section>
      ) : null}
    </article>
  )
}
