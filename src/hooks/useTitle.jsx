import React, { useEffect, useRef } from 'react'

const useTitle = title => {
  const prevTitleRef = useRef(document.title)
  useEffect(() => {
    document.title = title
    return () => {
      document.title = prevTitleRef.current
    }
  }, [title])
}

export default useTitle
