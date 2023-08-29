import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div className='w-full max-w-[1320px] px-5 mx-auto py-20'>
        <h1>Error</h1>
        <p>{error.message}</p>
        <Link to='/'>Ortga qaytish</Link>
    </div>
  )
}

export default Error