import { Field, Form, Formik } from 'formik';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PdfService from '../../service/PdfService';
import Button from '../common/Button';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MenuButton from '../common/MenuButton';

function PhaseSix() {

    const [insertedValues, setInsertedValues] = useState([]);

    const downloadPdf = () => {
        if (insertedValues.length > 0) {
            PdfService.getPhaseSixPdf(insertedValues);
        } else {
            console.log("Cannot download pdf, no data inserted");
        }
    }

    return (
        <div className='bg-amber-50 h-screen'>

            <Header title='Tracciabilità prodotto finito' />

            <div className='grid place-content-center h-1 bg-amber-600 w-full' />
            <div className='md:h-10' />

            <Formik
                initialValues={{
                    date: '',
                    name: '',
                    lot: '',
                    product: '',
                    quantity: '',
                    productLot: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    if (values.name !== '' && values.type !== '' && values.date !== '' && values.lot !== '') {
                        setInsertedValues([...insertedValues, values]);
                        resetForm();
                    }
                }}
                validationSchema={Yup.object({
                    date: Yup.date().required('Data obbligatoria'),
                    name: Yup.string().required('Desc. obbligatoria'),
                    lot: Yup.string().required('Lotto obbligatorio'),
                    product: Yup.string().required('Prodotto obbligatorio'),
                    quantity: Yup.string().required('Quantità obbligatoria'),
                    productLot: Yup.string().required('Lotto obbligatorio'),
                })}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4 flex items-center' >
                            <label htmlFor='date'>
                                Data lavorazione
                            </label>
                            <div className='grid grid-cols-1' >
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                        <svg aria-hidden="true" className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>

                                    <Field id='date' name='date' type='date' className={errors.date && touched.date ? 'border-red-500' : ''} />
                                </div>
                            </div>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='name'>
                                Materia prima lavorato
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field type='text' id='name' name='name' placeholder='Materia prima' className={errors.name && touched.name ? 'border-red-500' : ''} />
                            </div>
                            <label htmlFor='lot'>
                                Lotto materia prima
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field type='text' id='lot' name='lot' placeholder='Lotto materia prima' className={errors.lot && touched.lot ? 'border-red-500' : ''} />
                            </div>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='product'>
                                Prodotto ottenuto
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field type='text' id='product' name='product' placeholder='Prodotto' className={errors.product && touched.product ? 'border-red-500' : ''} />
                            </div>
                            <label htmlFor='quantity'>
                                Kg prodotto finito ottenuti
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field type='text' id='quantity' name='quantity' placeholder='Kg prodotto' className={errors.quantity && touched.quantity ? 'border-red-500' : ''} />
                            </div>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='productLot'>
                                Lotto prodotto finito
                            </label>
                            <div className='grid grid-cols-1' >
                                <Field type='text' id='productLot' name='productLot' placeholder='Lotto prodotto' className={errors.productLot && touched.productLot ? 'border-red-500' : ''} />
                            </div>
                        </div>

                        <div className='md:mt-8 p-5 flex flex-row-reverse'>
                            <Button type='submit'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Button>
                        </div>
                        <div className='h-20' />
                    </Form>)}
            </Formik>

            <div className="overflow-x-auto relative hidden md:block">
                {insertedValues.length > 0 && (
                    <table className="w-full text-sm text-center text-black mb-20">
                        <thead className="text-xs text-amber-600 uppercase bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Data lavorazione
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Materia prima lavorato
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Lotto materia prima
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Prodotto ottenuto
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Kg prodotto finito ottenuti
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Lotto prodotto finito
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Azioni
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {insertedValues.map((value, index) => {
                                return (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-amber-100 border-b border-gray-200' : 'border-b border-gray-200 bg-amber-200'}>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.date}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.lot}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.product}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.quantity}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.productLot}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <button className="text-red-500 hover:text-red-700 font-bold py-1 px-3 rounded"
                                                    onClick={() => {
                                                        const newInsertedValues = [...insertedValues];
                                                        newInsertedValues.splice(index, 1);
                                                        setInsertedValues(newInsertedValues);
                                                    }} >
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
                    </table>
                )}
            </div>

            <div className="overflow-x-auto relative md:hidden block">
                {insertedValues.length > 0 && (
                    <table className="w-full text-sm text-center text-black mb-20">
                        <thead className="text-xs text-amber-600 uppercase bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Materia prima lavorato
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Azioni
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {insertedValues.map((value, index) => {
                                return (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-amber-100 border-b border-gray-200' : 'border-b border-gray-200 bg-amber-200'}>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <span className="font-bold text-amber-700">{value.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex justify-center items-center">
                                                <button className="text-red-500 hover:text-red-700 font-bold py-1 px-3 rounded"
                                                    onClick={() => {
                                                        const newInsertedValues = [...insertedValues];
                                                        newInsertedValues.splice(index, 1);
                                                        setInsertedValues(newInsertedValues);
                                                    }} >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            <Footer>
                <div className='fixed'>
                    <MenuButton>
                        <Link to='/step-5'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                </div>
                <div className='flex flex-row-reverse'>
                    <MenuButton>
                        <Link to='/step-1'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                    <div className="w-10" />
                    <MenuButton onClick={downloadPdf}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                        </svg>
                    </MenuButton>
                </div>
            </Footer>
        </div >
    );
}

export default PhaseSix;
