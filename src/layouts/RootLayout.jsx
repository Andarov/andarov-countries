import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
        <Header/>
        <main className='bg-[#f4f4f4]'>
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout