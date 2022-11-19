import { React } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
import MenuButton from '../common/MenuButton';


function EndPhase() {

    return (
        <div className='bg-gradient-to-bl from-amber-400 to-amber-600 h-screen md:h-fill'>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8 p-4 md:p-8'>

                <div className='px-4 uppercase font-bold py-4 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl col-span-1 max-w-xl md:max-w-none md:col-span-2 lg:col-span-3
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <h3>Tracciamento completato!</h3>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <h3 className='text-xl text-justify'>Ritorna alla pagina precedente relativa alla fase 6.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </div>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <h3>Procedi con il tracciamento di un nuovo prodotto ripartendo dalla fase 1.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                        </svg>
                    </div>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                    <h3>Ritorna alla <strong>homepage</strong> per rivedere le configurazioni locali.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <Link to='/'>
                            <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer>
                <div className='flex place-content-center gap-2'>
                    <MenuButton>
                        <Link to='/step-6'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </Link>
                    </MenuButton>

                    <MenuButton>
                        <Link to='/step-1'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                    <MenuButton>
                        <Link to='/'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                </div>

            </Footer>
        </div >
    );
}

export default EndPhase;
