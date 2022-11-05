import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function PhaseThree() {

    const [insertedValues, setInsertedValues] = React.useState([]);

    return (
        <div className='bg-sky-50 h-screen'>

            <div className='grid place-content-center h-20 bg-sky-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='md:text-4xl sm:text-2xl font-bold' >Checklist materie prime</h1>
                </div>
            </div>
            <div className='grid place-content-center h-1 bg-sky-800 w-full' />
            <div className='h-10' />

            <Formik
                initialValues={{
                    name: '',
                    lot: '',
                    isCompliantTransformation: true,
                    isCompliantAfter: true,
                }}
                onSubmit={(values, { resetForm }) => {
                    if (values.plants !== '' && values.lot !== '') {
                        setInsertedValues([...insertedValues, values]);
                        resetForm();
                    }
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Desc. obbligatoria'),
                    lot: Yup.string().required('Lotto obbligatorio'),
                    isCompliantTransformation: Yup.boolean(),
                    isCompliantAfter: Yup.boolean(),
                })}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4' >
                            <label htmlFor='name'>
                                Nome materia prima
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field className='border-2 border-sky-500 rounded-lg h-10 p-2.5' id='name' name='name' placeholder="Materia prima" />
                                {errors.name && touched.name ? (
                                    <div className='text-red-500'>{errors.name}</div>
                                ) : null}
                            </div>
                            <label htmlFor='lot'>
                                Lotto materia prima
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field className='border-2 border-sky-500 rounded-lg h-10 p-2.5' id='lot' name='lot' placeholder="Lotto" />
                                {errors.lot && touched.lot ? (
                                    <div className='text-red-500'>{errors.lot}</div>
                                ) : null}
                            </div>
                            <label htmlFor='isCompliantTransformation'>
                                Conforme alla trasformazione
                            </label>
                            <Field type="checkbox" className='border-sky-500 text-sky-600 bg-gray-100 form-checkbox focus:ring-sky-500 rounded-lg h-10 w-10' id='isCompliantTransformation' name='isCompliantTransformation' />

                            <label htmlFor='isCompliantAfter'>
                                Controllo post trasporto
                            </label>
                            <Field type="checkbox" className='border-sky-500 text-sky-600 bg-gray-100 form-checkbox focus:ring-sky-500 rounded-lg h-10 w-10' id='isCompliantAfter' name='isCompliantAfter' />
                        </div>
                        <div className='mt-8 p-5 flex flex-row-reverse'>
                            <button type='submit' className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-sky-300  
                            bg-sky-200 
                            text-sky-800 
                            border duration-200 ease-in-out 
                            border-sky-700 transition'>
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </Form>)}
            </Formik>

            <div className="overflow-x-auto relative hidden md:block">
                {insertedValues.length > 0 && (
                    <table className="w-full text-sm text-center text-black mb-20">
                        <thead className="text-xs text-sky-600 uppercase bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nome materia prima
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Lotto materia prima
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Conforme alla trasformazione
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Controllo post trasporto az. trasformazione
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Azioni
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {insertedValues.map((value, index) => {
                                return (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-sky-100 border-b border-gray-200' : 'border-b border-gray-200 bg-sky-200'}>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-sky-700">{value.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-sky-700">{value.lot}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-sky-700">{value.isCompliantTransformation ? 'Si' : 'No'}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-sky-700">{value.isCompliantAfter ? 'Si' : 'No'}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <button className="hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-red-600 duration-200 ease-in-out"
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
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>)}
            </div>

            <div className="overflow-x-auto relative md:hidden sm:block">
                {insertedValues.length > 0 && (
                    <table className="w-full text-sm text-center text-black mb-20">
                        <thead className="text-xs text-sky-600 uppercase bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nome materia prima
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Azioni
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {insertedValues.map((value, index) => {
                                return (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-sky-100 border-b border-gray-200' : 'border-b border-gray-200 bg-sky-200'}>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-sky-700">{value.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <button className="hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-red-600 duration-200 ease-in-out"
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
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>)}
            </div>

            <div className='h-20 bg-sky-800 w-full fixed bottom-0' >
                <div className='p-5'>
                    <div className='fixed'>
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-sky-200  
                            bg-sky-100 
                            text-sky-700 
                            border duration-200 ease-in-out 
                            border-sky-600 transition" >
                            <Link to='/step-2'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </Link>
                        </button>
                    </div>
                    <div className='flex flex-row-reverse'>
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-sky-200  
                            bg-sky-100 
                            text-sky-700 
                            border duration-200 ease-in-out 
                            border-sky-600 transition">
                            <Link to='/step-4'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </button>
                        <div className='w-10' />
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-sky-200  
                            bg-sky-100 
                            text-sky-700 
                            border duration-200 ease-in-out 
                            border-sky-600 transition">
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

export default PhaseThree;
