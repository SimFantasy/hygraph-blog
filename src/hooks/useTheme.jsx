import React, { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('light')

  const root = document.documentElement

  useEffect(() => {
    const localTheme = localStorage.getItem('sim-blog-theme')
    if (localTheme) {
      setTheme(localTheme)
      root.setAttribute('data-color-mode', localTheme)
    } else {
      setTheme('light')
      root.setAttribute('data-color-mode', 'light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('sim-theme', 'dark')
      root.setAttribute('data-color-mode', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('sim-theme', 'light')
      root.setAttribute('data-color-mode', 'light')
    }
  }

  return { theme, toggleTheme }
}

export default useTheme
