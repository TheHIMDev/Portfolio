import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import PreLoader from '../preLoader/PreLoader'

function Layout({children}) {
  return (
    <>
        <PreLoader/>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout
