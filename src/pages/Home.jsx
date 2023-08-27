import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import search from '../assets/img/search.svg'

const API = 'https://restcountries.com/v3.1/all';

let options = {
  style: 'decimal',
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

const Home = () => { 
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchApi = async ()=>{
    try{
      setIsLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setCountries(data);
      setIsLoading(false)
      setIsError(false)
    }catch(error){
      setIsLoading(false);
      setIsError(true)
    }
  }

  console.log(countries);

  useEffect(()=>{
    fetchApi();
  }, [])

  return (
    <div className='w-full max-w-[1320px] px-5 mx-auto py-12'>
        {/* Input & Select */}
        <div className="flex flex-col items-end sm:flex-row sm:justify-between">
             {/* Input */}
            <div className='relative w-full max-w-[480px] mb-5 sm:mr-10 sm:mb-0'>
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

        {/* API Data */}
        <div className='pt-12'>
          { isError && <p>Xatolik</p> }
          { isLoading && <p className='text-3xl text-center font-bold'>Loading...</p> }

          {/* Countries list */}
          <ul className='grid grid-cols-4 gap-x-[74px] gap-y-16'>
            { !isError && countries && countries.length > 0 && countries.map(country =>{
              return(
                <li className='shadow-listItem rounded-md'>
                  <img className='h-40 w-full' src={country.flags.png} alt="" />
                  <div className='pt-6 px-6 pb-11'>
                    <h3 className='font-bold text-lg text-textColor leading-[26px] mb-2'>{country.name.common}</h3>
                    <div className='space-y-2'>
                      <p className='text-sm leading-4 text-textColor'><b>Population:</b> {country.population.toLocaleString('uz-Uz', options)}</p>
                      <p className='text-sm leading-4 text-textColor'><b>Region:</b> {country.region}</p>
                      <p className='text-sm leading-4 text-textColor'><b>Capital:</b> {country.capital ? country.capital : 'No capital'}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>


    </div>
  )
}

export default Home