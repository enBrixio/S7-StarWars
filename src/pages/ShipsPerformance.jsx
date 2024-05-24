import React, { useEffect, useState } from 'react';
import { useJuanSelector } from "../store";
import { useParams } from 'react-router-dom';

export function ShipsPerformance() {
  const { id } = useParams(); // Obtener la ID de los parámetros de la URL
  const { data, loading, error } = useJuanSelector(
    (state) => state.shipsSlices,
  );
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      if (!data) return;

      const urlData = data.map((item) => item.url);
      const ids = urlData.map((item) => item.split('/')[5]);
      const newImages = {};

      for (const id of ids) {
        try {
          const request = await fetch(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
          if (!request.ok) {
            newImages[id] = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          } else {
            newImages[id] = request.url;
          }
        } catch (error) {
          newImages[id] = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
        }
      }

      setImages(newImages);
    };

    if (data && data.length > 0) {
      fetchImages();
    }
  }, [data]);

  if (loading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  const ship = data.find(item => item.url.split('/')[5] === id);

  if (!ship) {
    return <div className="text-white text-center">Ship not found</div>;
  }

  return (
<div className="min-h-screen bg-neutral-800 flex justify-center px-4 sm:px-6 lg:px-8">
  <div className="mt-14 w-full max-w-4xl">
    <h1 className="text-yellow-600 text-4xl mb-10 text-center sm:text-left">{ship.name}</h1>
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
      <img src={images[id]} alt={ship.name} className="w-full sm:w-2/3 h-64 rounded-3xl mb-5 sm:mb-0 sm:mr-5" />
      <div className="text-white text-2xl mt-5 sm:mt-0 sm:ml-5 text-center sm:text-left space-y-2">
        <p><span className='text-yellow-600'>Model:</span> {ship.model}</p>
        <p><span className='text-yellow-600'>Manufacturer:</span> {ship.manufacturer}</p>
        <p><span className='text-yellow-600'>Cost:</span> {ship.cost_in_credits} credits</p>
        <p><span className='text-yellow-600'>Length:</span> {ship.length} meters</p>
        <p><span className='text-yellow-600'>Max Speed:</span> {ship.max_atmosphering_speed} km/h</p>
      </div>
    </div>
  </div>
</div>

  );
}



