import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Detail = () => {
    const { name } = useParams();
    let country = useLoaderData();
    country = country[0]
    return (
        <div className='w-full max-w-[1320px] px-5 mx-auto py-20'>
            <h1>{country.name.common}</h1>
            <p>{country.population}</p>
        </div>
    )
}

export default Detail

export const fetchCountry = async({ params })=>{
    const { name } = params
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if(!res.ok){
        throw Error('Davlatni olib bolmadi')
    }
    const data = await res.json()
    return data
  }