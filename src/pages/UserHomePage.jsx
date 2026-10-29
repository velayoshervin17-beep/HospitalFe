import DataTable from '../components/DataTable.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { workspaceCensus } from '../data/records.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const columns = [
  { key: 'module', label: 'Module' },
  { key: 'unit', label: 'Unit' },
  { key: 'cases', label: 'Cases' },
  { key: 'note', label: 'Note' },
]

export default function UserHomePage() {
  useDocumentTitle('Workspace')

  return (
    <article className="page wrap">
      <PageIntro
        eyebrow="Signed-in view"
        title="User workspace"
        lede="Modules and submodules are in the sidebar. Choosing one opens that unit in this panel."
      />
      <h2 className="section-title">This morning</h2>
      <DataTable columns={columns} rows={workspaceCensus} />
    </article>
  )
}
