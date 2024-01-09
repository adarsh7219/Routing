import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layoute() {
  return (
   <>
  <Header></Header>

   <Outlet></Outlet>
 
   <Footer></Footer>
   </>
  )
}

export default Layoute
