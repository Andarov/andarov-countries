import React from 'react'
import night from '../assets/img/night.svg'

const Header = () => {
  return (
    <header className='py-6 shadow-header'>
      <div className="flex justify-between items-center w-full max-w-[1320px] px-5 mx-auto">
        <a className='text-textColor text-xl font-bold sm:text-2xl' href="#">
            <h1>Where in the world?</h1>
        </a>

        <button className='inline-flex items-center tex-base font-semibold text-textColor'>
          <img className='mr-2' src={night} alt="Moon icon" />
          <span className='hidden sm:block'>Dark mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header
