import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StarshipsList }  from './pages/StarshipList.jsx';
import Home from './pages/Home.jsx';
import { Header } from './layout/Header.jsx'
import { useJuanDispatch } from './store/index.js';
import { fetchStarShips } from './store/thunks/Thunks.js';

export default function App() {
  const dispactch = useJuanDispatch();

  useEffect(() => {
    dispactch(fetchStarShips());
    
  }, []);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starships" element={<StarshipsList />} />
    </Routes>
    </>
  )
}
