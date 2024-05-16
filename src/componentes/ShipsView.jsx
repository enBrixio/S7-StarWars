import React from 'react';
import { useJuanSelector } from "../store";
import Jedi from '../assets/jedi.svg';

export default function ShipsView() {
  const { ships, loading, error, data } = useJuanSelector(
    (state) => state.shipsSlices,
  );

  return (
    <div className="min-h-screen bg-neutral-800 flex justify-center items-center">
      <div className="">
        <div className="text-white flex flex-wrap justify-center items-start">
          {!loading && data.map((item, index) => (
            <div key={index} className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-5 m-3 bg-neutral-700 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className='text-yellow-600 text-3xl'>{item.name}</h1>
                  <h2 className='text-gray-400'>{item.model}</h2>
                </div>
                <img className="h-12 w-12 cursor-pointer" src={Jedi} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







