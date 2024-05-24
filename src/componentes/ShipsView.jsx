// component/ShipsView.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { useJuanSelector, useJuanDispatch } from "../store";
import { fetchStarShips } from '../store/thunks/Thunks';
import { useNavigate } from 'react-router-dom';
import Jedi from '../assets/jedi.svg';

export default function ShipsView() {
  const { ships, loading, error, data } = useJuanSelector(
    (state) => state.shipsSlices,
  );
  const dispatch = useJuanDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  // Añadir el ID a cada objeto
  const dataWithIds = data.map(item => {
    const id = item.url.split('/')[5]; // Extraer el ID de la URL
    return { ...item, id }; // Añadir el ID al objeto
  });

  const handleImageClick = (id) => {
    navigate(`/ship/${id}`); // Navegar a la página del ship con el ID
  };

  const loadMoreShips = useCallback(async () => {
    if (allDataLoaded) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const result = await dispatch(fetchStarShips(page)).unwrap();
    if (result.next === null) {
      setAllDataLoaded(true);
    }
  }, [dispatch, page, allDataLoaded]);

  useEffect(() => {
    loadMoreShips();
  }, [loadMoreShips]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500 && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="min-h-screen bg-neutral-800 flex justify-center ">
      <div className=" mt-14">
        <div className="text-white flex flex-wrap justify-center items-start">
          {!loading && dataWithIds.map((item, index) => (
            <div key={index} className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-5 m-2 bg-neutral-700 rounded-lg ">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className='text-yellow-600 text-3xl'>{item.name}</h1>
                  <h2 className='text-gray-400'>{item.model}</h2>
                </div>
                <img className="h-12 w-12 cursor-pointer" src={Jedi} onClick={() => handleImageClick(item.id)} alt="Jedi" />
              </div>
            </div>
          ))}
        </div>
        {loading && <div className="text-white text-center">Loading...</div>}
      </div>
    </div>
  );
}





















