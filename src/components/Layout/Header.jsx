import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiTyphoonFill } from 'react-icons/ri'
import cx from 'clsx'
import { useTheme, useTitle } from '@/hooks'
import { siteTitle } from '@/constants/config'
import { HeaderWrap } from './style'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  useTitle(siteTitle)
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
      </div>
    </HeaderWrap>
  )
}

export default Header
