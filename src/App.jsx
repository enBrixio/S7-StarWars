// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StarshipsList } from './pages/StarshipList.jsx';
import Home from './pages/Home.jsx';
import { Header } from './layout/Header.jsx';
import { useJuanDispatch } from './store/index.js';
import { fetchStarShips } from './store/thunks/Thunks.js';
import { ShipsPerformance } from './pages/ShipsPerformance.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './pages/PrivateRoute.jsx';

export default function App() {
  const dispatch = useJuanDispatch();

  useEffect(() => {
    dispatch(fetchStarShips());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<PrivateRoute element={StarshipsList} />} />
        <Route path="/ship/:id" element={<ShipsPerformance />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

