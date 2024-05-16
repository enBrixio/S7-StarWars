// import Logo from '../assets/star-wars.svg';
import Insta from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitterx.svg';
import { Link } from 'react-router-dom';


export function Header() {

    const Logo = 'https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254';
    
    return (
<>
    <header className='bg-black'>
        <div className='container mx-auto'>r
            {/* Contenedor de la fila */}
            <div className='flex justify-between items-center'>
                {/* Contenedor de las imágenes */}
                <div className='flex'>
                    <img className='w-7 h-7 mt-3 ml-3 cursor-pointer'src={youtube} alt="YouTube" />
                    <img className='w-7 h-7 mt-3 ml-3 cursor-pointer' src={twitter} alt="Twitter" />
                    <img className='w-7 h-7 mt-3 ml-3 cursor-pointer' src={Insta} alt="Instagram" />
                </div>
                {/* Contenedor de los elementos de inicio de sesión */}
                <div className='flex'>
                    <span className='text-white mt-3 mx-3 cursor-pointer'>Login</span>
                    <span className='text-white mt-3 mx-3 cursor-pointer'>Sign Up</span>
                </div>
            </div>
            {/* Logo */}
            <div className='flex justify-center'>
                <img className=' h-28 mb-10' src={Logo} alt="LogostarWars" />
            </div>
            <nav className=' border-y-white'>
                <ul className='flex justify-center'>
                    <Link to="/" className='text-gray-400 text-xl mx-5 mb-2 font-mono cursor-pointer'>Home</Link>
                    <Link to="/starships" className='text-gray-400 text-xl mx-5 mb-2 font-mono cursor-pointer'>Starships</Link>
                </ul>
            </nav>
        </div>
    </header>
</>



    )
    }