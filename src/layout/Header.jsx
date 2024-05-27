// Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../store/slices/authSlice'; // Asegúrate de que la ruta sea correcta
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitterx.svg';
import Insta from '../assets/instagram.svg';

export function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const Logo = 'https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254';

  return (
    <header className="bg-black fixed top-0 left-0 right-0 w-full z-50">
      <div className="container mx-auto">
        {/* Contenedor de la fila */}
        <div className="flex justify-between items-center py-4">
          {/* Contenedor de las imágenes */}
          <div className="flex">
            <img className="w-7 h-7 mt-3 ml-3 cursor-pointer" src={youtube} alt="YouTube" />
            <img className="w-7 h-7 mt-3 ml-3 cursor-pointer" src={twitter} alt="Twitter" />
            <img className="w-7 h-7 mt-3 ml-3 cursor-pointer" src={Insta} alt="Instagram" />
          </div>
          {/* Contenedor de los elementos de inicio de sesión */}
          <div className="flex">
            {<Link to="/login" className="text-white mt-3 mx-3 cursor-pointer">Login</Link>}
            {<Link to="/signup" className="text-white mt-3 mx-3 cursor-pointer">Sign Up</Link>}
          </div>
        </div>
        {/* Logo */}
        <div className="flex justify-center">
          <img className="h-28 mb-4" src={Logo} alt="LogostarWars" />
        </div>
        <nav className="border-y border-gray-700 py-2">
          <ul className="flex justify-center">
            <Link to="/" className="text-gray-400 text-xl mx-5 mb-2 font-mono cursor-pointer">Home</Link>
            {currentUser && <Link to="/starships" className="text-gray-400 text-xl mx-5 mb-2 font-mono cursor-pointer">Starships</Link>}
          </ul>
        </nav>
      </div>
    </header>
  );
}



