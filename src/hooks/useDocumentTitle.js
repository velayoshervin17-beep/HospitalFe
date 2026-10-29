import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Sherv Hospital` : 'Sherv Hospital'
  }, [title])
}
