import { React } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
import MenuButton from '../common/MenuButton';
import Button from '../common/Button';


function EndPhase() {

    const handleDonation = () => {
        window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=B4AGF9F8W7DHJ';
    }

    return (
        <div className='bg-gradient-to-bl from-amber-400 to-amber-600 h-screen md:h-fill'>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8 p-4 md:p-8'>

                <div className='px-4 uppercase font-bold py-4 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl col-span-1 max-w-xl md:max-w-none md:col-span-2 lg:col-span-3
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                    <h3>Tracciamento completato!</h3>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 max-w-xl md:max-w-xl relative h-20 md:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                    <h3 className='text-xl text-justify'>Ritorna alla pagina precedente relativa alla fase 6.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-20 lg:w-32 h-20 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </div>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                    <h3>Procedi con il tracciamento di un nuovo prodotto ripartendo dalla fase 1.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-20 lg:w-32 h-20 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                        </svg>
                    </div>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-20 md:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                    <h3>Ritorna alla <strong>homepage</strong> per rivedere le configurazioni locali.</h3>

                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-20 lg:w-32 h-20 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                    </div>
                </div>

                <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative md:h-32 lg:h-40 hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                    <h3>Contribuisci al mantenimento dei server attraverso una donazione.</h3>
                    <div className='grid grid-cols-1 place-content-center mx-4 mt-2'>
                        <Button onClick={handleDonation}>
                            Paypal
                        </Button>
                    </div>
                    <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
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
