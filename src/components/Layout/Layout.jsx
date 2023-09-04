import React from 'react'
import Routers from '../../router/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
      <>
          <Header />
          <main>
              <Routers/>
          </main>
          <Footer/>
      </>
  )
}

export default Layout