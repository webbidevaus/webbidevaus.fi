import { useState, useCallback, useEffect } from 'react'

export const useHash = () => {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  )

  const onHashChange = useCallback(() => {
    setHash(window.location.hash)
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const _setHash = useCallback(
    newHash => {
      if (newHash !== hash) {
        window.location.hash = newHash
      }
    },
    [hash]
  )

  return [hash, _setHash]
}
