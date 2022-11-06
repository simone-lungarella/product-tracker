import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo.png';

function Homepage() {

    return (
        <div className='bg-amber-50 h-screen'>

            <div className='grid place-content-center h-20 bg-amber-300 w-full'>
                {/* <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >Traccia Prodotto</h1>
                </div> */}
            </div>

            <div className='grid place-content-center h-1 bg-amber-600 w-full' />

            <div className='h-20' />

            <div className='grid place-content-center'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='h-20' />

            <div className='grid hover:content-around place-content-center'>
                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-14 py-6 rounded font-bold cursor-pointer 
                            hover:bg-amber-300  
                            bg-amber-200 
                            text-amber-800 
                            border duration-200 ease-in-out 
                            border-amber-700 transition py-4 w-40'>
                    <Link to='/step-1'>Inizia</Link>
                </button>
            </div>
            
            <div className='h-20 bg-amber-600 w-full fixed bottom-0' />
        </div>
    );
}

export default Homepage;