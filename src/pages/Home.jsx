import React from 'react'
import search from '../assets/img/search.svg'

const Home = () => {
  return (
    <div className='w-full max-w-[1320px] px-5 mx-auto py-12'>
        {/* Input & Select */}
        <div className="flex justify-between items-center">
            {/* Input */}
            <div className='relative w-full max-w-[480px]'>
                <input className='w-full py-[18px] pl-[74px] rounded-md shadow-input text-sm text-textColor' type="search" placeholder='Search for a country…' />
                <img className='absolute top-5 left-8' src={search} alt="search icon" />
            </div>

            {/* Select */}
            <select className='px-6 py-5 shadow-input w-52 text-sm text-textColor space-y-2'>
                <option selected disabled>Filter by region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default Home