import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiTyphoonFill, RiMoonLine, RiSunLine } from 'react-icons/ri'
import cx from 'clsx'
import { useTheme } from '@/hooks'
import { Author } from '@/components'
import { HeaderWrap } from './style'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
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
