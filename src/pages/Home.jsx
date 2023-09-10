import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import search from "../assets/img/search.svg";

const API = "https://restcountries.com/v3.1/all";

let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

const Home = () => {
  const countries = useLoaderData();

  return (
    <div className="py-12 dark:bg-midDark">
      <div className="w-full max-w-[1320px] px-5 mx-auto">
        {/* Input & Select */}
        <div className="flex flex-col items-end sm:flex-row sm:justify-between">
          {/* Input */}
          <div className="relative w-full max-w-[480px] mb-5 sm:mr-10 sm:mb-0">
            <input
              className="w-full py-[18px] pl-[74px] rounded-md shadow-input text-sm text-textColor dark:bg-lightDark"
              type="search"
              placeholder="Search for a country…"
            />
            <img
              className="absolute top-5 left-8"
              src={search}
              alt="search icon"
            />
          </div>

          {/* Select */}
          <select className="px-6 py-5 shadow-input w-52 text-sm text-textColor space-y-2 rounded- bg-white dark:text-white dark:bg-lightDark">
            <option value="" disabled>
              Filter by region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {/* API Data */}
        <div className="pt-12">
          {/* Countries list */}
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-14 xl:grid-cols-4 xl:gap-x-[74px] xl:gap-y-16">
            {countries &&
              countries.length > 0 &&
              countries.map((country) => {
                return (
                  <li
                    key={country.name.common}
                    className="shadow-listItem rounded-md dark:bg-lightDark dark:text-white"
                  >
                    <Link to={country.name.common}>
                      <img
                        className="w-full h-40"
                        src={country.flags.png}
                        alt={country.name.common + " flag"}
                      />
                      <div className="pt-6 pb-11 px-6">
                        <h3 className="text-textColor text-lg leading-6 font-bold mb-4 dark:text-white">
                          {country.name.common}
                        </h3>
                        <p>
                          <b>Population:</b>{" "}
                          {country.population.toLocaleString("uz-Uz", options)}
                        </p>
                        <p>
                          <b>Region:</b> {country.region}
                        </p>
                        <p>
                          <b>Capital:</b>{" "}
                          {country.capital ? country.capital : "No capital"}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const fetchApi = async () => {
  const res = await fetch(API);
  const data = await res.json();
  if (!res.ok) {
    throw Error("Davlatlarni olib bolmadi");
  }
  return data;
};
