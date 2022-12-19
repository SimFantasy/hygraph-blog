import React, { useState, useCallback, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { RiTyphoonFill, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import cx from 'clsx'
import { useTheme, useTitle, useBodyScrollLock } from '@/hooks'
import { siteTitle } from '@/constants/config'
import { HeaderWrap } from './style'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isNavShow, setIsNavShow] = useState(false)
  useTitle(siteTitle)
  const [lockState, toggleLock] = useBodyScrollLock()
  const handleToggleNav = useCallback(() => {
    setIsNavShow(!isNavShow)
    toggleLock()
  })
  const handleClickNavLink = () => {
    setIsNavShow(false)
    toggleLock()
  }
  console.log('isNavShow', isNavShow)
  console.log('lockState', lockState)
  return (
    <HeaderWrap>
      <div className='container header-container'>
        <div className='logo'>
          <RiTyphoonFill />
          <span className='logo-text'>Sim.z</span>
        </div>
        <div className='navs'>
          <NavLink to='/home' className='nav-item'>
            Home
          </NavLink>
          <NavLink to='/posts' className='nav-item'>
            Post
          </NavLink>
          <NavLink to='/portfolios' className='nav-item'>
            Portfolio
          </NavLink>
          <NavLink to='/about' className='nav-item'>
            About
          </NavLink>
        </div>
        <div className={cx('color-mode', { dark: theme === 'dark' })} onClick={toggleTheme}></div>

        <div className='m-navs'>
          <div className='m-nav-btn' onClick={handleToggleNav}>
            {isNavShow ? <RiCloseLine /> : <RiMenuLine />}
          </div>
          <div className={cx('m-nav-container', { active: isNavShow })}>
            <div className='m-nav-links'>
              <NavLink to='/home' className='nav-item' onClick={handleClickNavLink}>
                Home
              </NavLink>
              <NavLink to='/posts' className='nav-item' onClick={handleClickNavLink}>
                Post
              </NavLink>
              <NavLink to='/portfolios' className='nav-item' onClick={handleClickNavLink}>
                Portfolio
              </NavLink>
              <NavLink to='/about' className='nav-item' onClick={handleClickNavLink}>
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrap>
  )
}

export default memo(Header)
