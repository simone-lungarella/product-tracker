import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo.png';

function Homepage() {

    return (
        <div className='bg-gradient-to-r from-amber-400 to-amber-600 h-screen h-screen flex flex-col justify-center items-center'>
            <div className='grid place-content-center'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='h-10' />
            
            <div className='grid hover:content-around place-content-center'>
                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-14 py-6 rounded font-bold cursor-pointer 
                            hover:bg-amber-300 bg-amber-200 text-amber-800 border duration-200 ease-in-out border-amber-700 transition py-4 w-40'>
                    <Link to='/step-1'>Inizia</Link>
                </button>
            </div>
        </div>
    );
}

export default Homepage;