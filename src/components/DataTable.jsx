import { Link } from 'react-router-dom'

export default function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column, index) => (
                <td key={column.key}>
                  {renderCell(column, row, row.linkKey ? column.key === row.linkKey : index === 0)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderCell(column, row, isFirst) {
  const value = row[column.key]

  if (value && typeof value === 'object' && 'label' in value) {
    return <span className={`status${value.tone === 'alert' ? ' is-alert' : ''}`}>{value.label}</span>
  }

  if (isFirst && row.href) {
    return <Link to={row.href}>{value}</Link>
  }

  return value
}
