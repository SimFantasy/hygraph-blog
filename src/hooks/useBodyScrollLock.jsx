import React, { useState, useEffect } from 'react'

const useBodyScrollLock = () => {
  const [lockState, setLockState] = useState(false)
  const body = document.body
  const lock = () => {
    body.style.overflow = 'hidden'
    setLockState(true)
  }

  const unlock = () => {
    body.style.overflow = null
    setLockState(false)
  }

  const toggleLock = () => {
    lockState ? unlock() : lock()
  }

  useEffect(() => {
    lockState ? lock() : unlock()
  }, [lockState])

  return [lockState, toggleLock]
}

export default useBodyScrollLock
