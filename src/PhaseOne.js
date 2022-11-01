import { Field, Form, Formik } from 'formik';
import React from 'react';

function PhaseOne() {

    const [insertedValues, setInsertedValues] = React.useState([]);

    return (
        <div className='bg-green-50 h-screen'>

            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >1. Tracciabilità piante e semi</h1>
                </div>
            </div>
            <div className='grid place-content-center h-1 bg-green-800 w-full' />
            <div className='h-10' />

            <Formik
                initialValues={{
                    plants: '',
                    lot: '',
                    isCompliant: false,
                    kg: 0,
                }}
                onSubmit={(values, { resetForm }) => {
                    if (values.plants !== '' && values.lot !== '') {
                        setInsertedValues([...insertedValues, values]);
                        resetForm();
                    }
                }}
            >
                <Form>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4' >
                        <label htmlFor='plants'>
                            Piante o semi acquistati
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10 p-2.5' id='plants' name='plants' />
                        <label htmlFor='lot'>
                            Lotto
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10 p-2.5' id='lot' name='lot' />

                        <label htmlFor='isCompliant'>
                            Conforme
                        </label>
                        <Field type="checkbox" className='border-green-500 text-green-600 bg-gray-100 form-checkbox focus:ring-green-500 rounded-lg h-10 w-10' id='isCompliant' name='isCompliant' />
                        
                        <label htmlFor='kg'>
                            Kg o colli acquistati
                        </label>
                        <Field type='number' className='text-sm rounded-lg focus:ring-green-500 block w-full p-2.5 border-2 border-green-500 rounded-lg h-10' id='kg' name='kg' />
                    </div>
                    <div className='mt-8 p-5 flex flex-row-reverse'>
                        <button type='submit' className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-300  
                            bg-green-200 
                            text-green-800 
                            border duration-200 ease-in-out 
                            border-green-700 transition'>
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </div>
                </Form>
            </Formik>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-black mb-20">
                    <thead className="text-xs text-green-600 uppercase bg-gray-800">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Piante o semi acquistati
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Lotto
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Conforme
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Kg o colli acquistati
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Azioni
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {insertedValues.map((value, index) => {
                            return (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200 border-b border-gray-200' : 'border-b border-gray-200 bg-gray-100'}>
                                    <td className="py-3 px-6">
                                        {value.plants}
                                    </td>
                                    <td className="py-3 px-6">
                                        {value.lot}
                                    </td>
                                    <td className="py-3 px-6">
                                        {value.isCompliant ? 'Si' : 'No'}
                                    </td>
                                    <td className="py-3 px-6">
                                        {value.kg}
                                    </td>
                                    <td className="py-3 px-6">
                                        <button className="text-red-500 hover:text-red-700 font-bold py-1 px-3 rounded"
                                            onClick={() => {
                                                const newInsertedValues = [...insertedValues];
                                                newInsertedValues.splice(index, 1);
                                                setInsertedValues(newInsertedValues);
                                            }}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='h-20 bg-green-800 w-full fixed bottom-0' >
                <div className='p-5'>
                    <div className='fixed'>
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-200  
                            bg-green-100 
                            text-green-700 
                            border duration-200 ease-in-out 
                            border-green-600 transition" >
                            <a href='/'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </a>
                        </button>
                    </div>
                    <div className='flex flex-row-reverse'>
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-200  
                            bg-green-100 
                            text-green-700 
                            border duration-200 ease-in-out 
                            border-green-600 transition">
                            <a href='/step-2'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </button>
                        <div className='w-10' />
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-200  
                            bg-green-100 
                            text-green-700 
                            border duration-200 ease-in-out 
                            border-green-600 transition">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PhaseOne;
