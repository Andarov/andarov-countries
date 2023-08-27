import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout