import React from 'react'
import Header from './components/headers/header'
import { Outlet } from 'react-router-dom'

import Footer from './components/footers/footer'
function Layout() {
  return (
   <>
    <Header />
    <Outlet />
    <Footer/>
   </>
  )
}

export default Layout