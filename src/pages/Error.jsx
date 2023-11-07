import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/img/error.png";

const Error = () => {
  const error = useRouteError();

  useEffect(()=>{
    document.title = 'Countries | Error'
  }, [])

  return (
    <div className="py-20 min-h-screen dark:bg-midDark dark:text-white">
    <div className="w-full max-w-[1320px] px-5 mx-auto">
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        <img className="w-full h-52 mb-8" src={errorImg} alt="Error image" />
        <h1 className="text-3xl font-bold mb-3">Error</h1>
        <p className="text-lg mb-2">{error.message}</p>
        <Link className="bg-green-400 px-5 py-1 rounded-md" to="/">Ortga qaytish</Link>
      </div>
    </div>
    </div>
  );
};

export default Error;
