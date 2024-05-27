import React from 'react';
import { Link } from 'react-router-dom'; // Si estás utilizando React Router

// Importa las imágenes necesarias
import Logo from '../assets/star-wars.svg';
import BackgroundImage from '../assets/bg-starwars.jpg';
import LukeSkywalker from '../assets/luke-skywalker.webp';
import DarthVader from '../assets/darth-vader.png';

function Home(){
    return (
        <div className="h-screen flex flex-col justify-between items-center mb-60" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
            <div className="flex flex-col items-center justify-center text-white pt-24">
                <h1 className="text-4xl font-bold mb-2">¡Bienvenido a Star Wars!</h1>
                <p className="text-lg">Explora el universo épico de Star Wars.</p>
            </div>
            <div className="flex justify-center space-x-10">
                <Link to="/luke-skywalker">
                    <div>
                        <h2 className="text-2xl font-bold">Luke Skywalker</h2>
                        <p>Conoce la historia de Luke Skywalker</p>
                        <img src={LukeSkywalker} alt="Luke Skywalker" className=" justify-start rounded-full" />
                    </div>
       
                </Link>

            </div>
        </div>
    );
}

export default Home;