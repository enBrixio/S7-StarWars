import React from 'react';

const List = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center items-start">
      {payload.map((item, index) => (
        <div key={index} className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-5 m-2 bg-neutral-700 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className='text-yellow-600 text-3xl'>{item.name}</h1>
              <h2 className='text-gray-400'>{item.model}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
