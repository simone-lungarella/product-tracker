import React from 'react';
import illustration from './img/Illustration.png';

function Homepage() {

    return (
        <div className='bg-green-50 h-screen'>

            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >Product Tracker</h1>
                </div>
            </div>

            <div className='grid place-content-center h-1 bg-green-800 w-full' />

            <div className='h-20' />

            <div className='grid place-content-center'>
                <img src={illustration} alt='Illustration' />
            </div>

            <div className='h-20' />

            <div className='grid hover:content-around place-content-center'>
                <button className='text-2xl bg-green-500 hover:bg-green-700 text-black font-bold py-4 w-40 rounded animate-bounce'>
                    <a href='/step-1'>Inizia</a>
                </button>
            </div>

            <div className='h-10 bg-green-800 w-full absolute bottom-0' />
        </div>
    );
}

export default Homepage;