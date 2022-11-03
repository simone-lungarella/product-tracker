import React from 'react';
import logo from './img/Logo.png';

function Homepage() {

    return (
        <div className='bg-green-50 h-screen'>

            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                {/* <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >Traccia Prodotto</h1>
                </div> */}
            </div>

            <div className='grid place-content-center h-1 bg-green-800 w-full' />

            <div className='h-20' />

            <div className='grid place-content-center'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='h-20' />

            <div className='grid hover:content-around place-content-center'>

                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-14 py-6 rounded font-bold cursor-pointer 
                            hover:bg-green-300  
                            bg-green-200 
                            text-green-800 
                            border duration-200 ease-in-out 
                            border-green-700 transition py-4 w-40'>
                    <a href='/#/step-1'>Inizia</a>
                </button>
            </div>

            <div className='h-10 bg-green-800 w-full fixed bottom-0' />
        </div>
    );
}

export default Homepage;