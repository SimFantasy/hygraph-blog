import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { LayoutWrap } from './style'

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      <main className='layout-main'>{children}</main>
      <Footer />
    </LayoutWrap>
  )
}

export default Layout
