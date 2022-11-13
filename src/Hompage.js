import { Field, Form, Formik } from 'formik';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo.png';

function Homepage() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='bg-gradient-to-r from-amber-400 to-amber-600 h-screen h-screen flex flex-col justify-center items-center'>

            {modalOpen &&
                (
                    <div className="backdrop-blur-sm grid place-content-center overflow-y-auto fixed z-50 w-auto md:inset-0 h-full p-4 bg-black bg-opacity-50">
                        <div className="relative bg-white rounded-lg shadow">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={() => { setModalOpen(false) }} >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="p-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center">
                                        <div className="text-center">
                                            <h1 className="text-2xl font-bold ml-10 mr-10">Definisci pié pagina</h1>
                                        </div>
                                    </div>
                                    <div className="h-10" />
                                    <div className="grid place-content-center">
                                        <Formik
                                            initialValues={{
                                                title: localStorage.getItem('title') || '',
                                                subtitle: window.localStorage.getItem('subtitle') || '',
                                            }}
                                            onSubmit={(values) => {
                                                localStorage.setItem('title', values.title);
                                                localStorage.setItem('subtitle', values.subtitle);
                                                setModalOpen(false);
                                            }}
                                        >
                                            {() => (
                                                <Form>
                                                    <div className='grid grid-cols-1 md:p-4 gap-2' >
                                                        <div className='flex flex-col'>
                                                            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='title'>Titolo</label>
                                                            <Field as="textarea" rows='2' cols='40' className='border-2 focus:border-amber-300 focus:ring-amber-300 rounded-lg h-20 p-2.5 disabled:bg-amber-50' id='title' name='title' placeholder="Titolo" />
                                                        </div>

                                                        <div className='flex flex-col'>
                                                            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='title'>Sottotitolo</label>
                                                            <Field as="textarea" rows='2' cols='40' className='border-2 focus:border-amber-300 focus:ring-amber-300 rounded-lg h-20 p-2.5 disabled:bg-amber-50' id='subtitle' name='subtitle' placeholder="Sottotitolo" />
                                                        </div>
                                                    </div>
                                                    <div className='h-10' />
                                                    <div className='grid place-content-center'>
                                                        <button type='submit' className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                                        hover:bg-amber-300 bg-amber-200 text-amber-800 border duration-200 ease-in-out border-amber-700 transition'>
                                                            Salva
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='grid place-content-center'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='h-10' />

            <div className='grid hover:content-around place-content-center grid-cols-2 gap-4'>
                <button className='text-base hover:scale-110 focus:outline-none flex justify-center rounded font-bold cursor-pointer 
                            hover:bg-amber-300 bg-amber-200 text-amber-800 border duration-200 ease-in-out border-amber-700 transition py-4 w-16'
                    onClick={() => { setModalOpen(true) }}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </button>
                <button className='text-base hover:scale-110 focus:outline-none flex justify-center rounded font-bold cursor-pointer 
                            hover:bg-amber-300 bg-amber-200 text-amber-800 border duration-200 ease-in-out border-amber-700 transition py-4 w-20'>
                    <Link to='/step-1'>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Homepage;