import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'

export default function MainLayout() {
  return (
    <>
     <Navbar/>

    <Outlet/>
    
    {/* <Footer/> */}
    </>
  )
}
