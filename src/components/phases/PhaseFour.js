import { Field, Form, Formik } from 'formik';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PdfService from '../../service/PdfService';
import Button from '../common/Button';
import Footer from '../common/Footer';
import Header from '../common/Header';

function PhaseFour() {

    const [ingredients, setIngredients] = useState([]);
    const [productInfo, setProductInfo] = useState({});

    const [productEditable, setProductEditable] = useState(true);

    const downloadPdf = () => {
        if (ingredients.length > 0 && !productEditable) {
            const json = {
                productInfo,
                ingredients,
            };
            PdfService.getPhaseFourPdf(json);
        } else {
            console.log("Cannot download pdf, no data inserted or form unlocked");
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div className={productEditable ? 'bg-amber-50 md:h-screen h-full' : 'bg-amber-50 h-full'}>

            <Header title='Tracciabilità prodotto finito' />

            <div className='grid place-content-center h-1 bg-amber-600 w-full' />
            <div className='md:h-10' />

            <Formik
                initialValues={{
                    date: '',
                    name: '',
                    cookingType: 'Cottura',
                    cookingTime: 0,
                    temperature: 0,
                    coverLot: '',
                    size: '',
                    productLot: '',
                    numberPacks: 0,
                    expirationDate: '',
                    lotBottles: '',
                    notes: '',
                }}
                validationSchema={Yup.object({
                    date: Yup.date().required('Data obbligatoria'),
                    name: Yup.string().required('Tipo obbligatorio'),
                    productLot: Yup.string().required('Lotto prodotto obbligatorio'),
                })}
            >
                {({ errors, touched, values }) => (
                    <Form>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4' >
                            <label htmlFor='date'>
                                Data di produzione
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                    <svg aria-hidden="true" className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>

                                <Field disabled={!productEditable} className='border-gray-300 bg-amber-50 border-2 text-amber-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-300 block w-full pl-10 p-2.5' id='date' name='date' type='date' />
                            </div>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='name'>
                                Tipo di prodotto
                            </label>
                            <Field disabled={!productEditable} className='border-2 focus:border-amber-300 rounded-lg h-10 p-2.5' id='name' name='name' placeholder="Tipo prodotto" />
                            <label htmlFor='cookingType'>
                                Trattamento termico
                            </label>
                            <Field
                                className='border-gray-300 border-2 focus:border-amber-300 focus:ring-amber-500 rounded-lg h-15 p-2.5 disabled:bg-amber-50'
                                component="select"
                                id="cookingType"
                                name="cookingType"
                                disabled={!productEditable}>
                                <option value="Cottura">Cottura</option>
                                <option value="Scottatura">Scottatura</option>
                                <option value="Essiccazione">Essiccazione</option>
                            </Field>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='cookingTime'>
                                Tempo di cottura (min)
                            </label>
                            <Field type="number" className='border-gray-300 border-2 focus:border-amber-300 focus:ring-amber-500 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='cookingTime' name='cookingTime' disabled={!productEditable} />
                            <label htmlFor='temperature'>
                                Temperatura (&#8451;)
                            </label>
                            <Field type="number" className='border-gray-300 border-2 focus:border-amber-300 focus:ring-amber-500 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='temperature' name='temperature' disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='coverLot'>
                                Lotto tappi o coperchi
                            </label>
                            <Field className='border-2 focus:border-amber-300 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='coverLot' name='coverLot' placeholder="Lotto" disabled={!productEditable} />
                            <label htmlFor='size'>
                                Formato (g/ml)
                            </label>
                            <Field className='border-2 focus:border-amber-300 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='size' name='size' placeholder="Formato" disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='productLot'>
                                Lotto prodotto finito
                            </label>
                            <Field className='border-2 focus:border-amber-300 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='productLot' name='productLot' placeholder="Lotto prodotto" disabled={!productEditable} />
                            <label htmlFor='numberPacks'>
                                N. confezioni ottenute
                            </label>
                            <Field type="number" className='border-gray-300 border-2 focus:border-amber-300 focus:ring-amber-500 rounded-lg h-10 p-2.5 disabled:bg-amber-50' id='numberPacks' name='numberPacks' disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='expirationDate'>
                                Data di scadenza
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                    <svg aria-hidden="true" className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <Field className='border-gray-300 bg-amber-50 border-2 focus:border-amber-300 text-amber-900 md:text-md text-sm rounded-lg focus:ring-amber-500 block w-full pl-10 p-2.5' id='expirationDate' name='expirationDate' type='date' disabled={!productEditable} />
                            </div>
                            <label htmlFor='lotBottles'>
                                Lotto bottiglie o vasetti
                            </label>
                            <Field className='border-2 focus:border-amber-300 rounded-lg h-10 p-2.5' id='lotBottles' name='lotBottles' placeholder="Lotto bottiglie" disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='notes'>
                                Note
                            </label>
                            <Field as="textarea" className='border-2 border-gray-300 focus:border-amber-300 focus:ring-amber-300 rounded-lg h-20 p-2.5 disabled:bg-amber-50' id='notes' name='notes' placeholder="Note..." disabled={!productEditable} />
                        </div>
                        <div className='flex justify-center mt-20'>

                            {!productEditable &&
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            }
                            {productEditable &&
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                                </svg>
                            }
                            <div className='w-5' />
                            <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" id="toggle" className="sr-only peer" onChange={
                                    () => {
                                        setProductEditable(!productEditable);
                                        if (productEditable) {
                                            console.log("Locking form, saving product info");
                                            setProductInfo(values);
                                        }
                                    }
                                } />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                                    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600">
                                </div>
                            </label>
                        </div>
                        {productEditable && (
                            <div className='h-20 mb-10' />
                        )}
                    </Form>)}
            </Formik>

            {!productEditable &&
                <div>
                    <div className='h-1 bg-gray-800 divider w-3/4 mx-auto shadow-inner mb-5 mt-5 rounded-full' />
                    <div className='text-center text-white text-2xl font-bold'>
                        <h1 className='text-2xl font-bold text-amber-800 uppercase' >Ingredienti ({ingredients.length})</h1>
                    </div>
                    <div className='h-10' />

                    <Formik
                        initialValues={{
                            ingredient: '',
                            quantity: 0,
                            lot: '',
                            supplier: '',
                        }}
                        onSubmit={(values, { resetForm }) => {
                            if (values.ingredient !== '' && values.lot !== '' && values.supplier !== '' && values.quantity !== '') {
                                setIngredients([...ingredients, values]);
                                resetForm();
                            }
                        }}
                        validationSchema={Yup.object({
                            ingredient: Yup.string().required('Desc. obbligatoria'),
                            quantity: Yup.string().required('Quantità obbligatoria'),
                            lot: Yup.string().required('Lotto obbligatorio'),
                            supplier: Yup.string().required('Fornitore obbligatorio'),
                        })}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4' >
                                    <label htmlFor='ingredient'>
                                        Ingrediente utilizzato
                                    </label>
                                    <div className='grid grid-cols-1' >
                                        <Field className='text-sm rounded-lg focus:ring-amber-500 block w-full p-2.5 border-2 focus:border-amber-300 rounded-lg h-10' id='ingredient' name='ingredient' placeholder="Ingrediente" />
                                        {errors.ingredient && touched.ingredient ? (
                                            <div className='text-red-500'>{errors.ingredient}</div>
                                        ) : null}
                                    </div>
                                    <div className='hidden md:block w-20' />

                                    <label htmlFor='quantity'>
                                        Quantità
                                    </label>
                                    <div className='grid grid-cols-1' >
                                        <Field type='number' className='border-gray-300 text-sm rounded-lg focus:ring-amber-500 block w-full p-2.5 border-2 focus:border-amber-300 rounded-lg h-10' id='quantity' name='quantity' />
                                        {errors.quantity && touched.quantity ? (
                                            <div className='text-red-500'>{errors.quantity}</div>
                                        ) : null}
                                    </div>

                                    <label htmlFor='lot'>
                                        Lotto
                                    </label>
                                    <div className='grid grid-cols-1' >
                                        <Field className='text-sm rounded-lg focus:ring-amber-500 block w-full p-2.5 border-2 focus:border-amber-300 rounded-lg h-10' id='lot' name='lot' placeholder="Lotto" />
                                        {errors.lot && touched.lot ? (
                                            <div className='text-red-500'>{errors.lot}</div>
                                        ) : null}
                                    </div>
                                    <div className='hidden md:block w-20' />

                                    <label htmlFor='supplier'>
                                        Fornitore
                                    </label>
                                    <div className='grid grid-cols-1' >
                                        <Field className='text-sm rounded-lg focus:ring-amber-500 block w-full p-2.5 border-2 focus:border-amber-300 rounded-lg h-10' id='supplier' name='supplier' placeholder="Fornitore" />
                                        {errors.supplier && touched.supplier ? (
                                            <div className='text-red-500'>{errors.supplier}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className='md:mt-8 p-5 flex flex-row-reverse'>
                                    <button type='submit' className='text-base hover:scale-110 focus:outline-none flex justify-center px-3 py-3 rounded font-bold cursor-pointer 
                                    hover:bg-amber-300  
                                    bg-amber-200 
                                    text-amber-800 
                                    border duration-200 ease-in-out 
                                    border-amber-700 transition'>
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className='h-20' />

                            </Form>)}
                    </Formik>

                    <div className="overflow-x-auto relative mb-20 hidden md:block">
                        {ingredients.length > 0 &&
                            <table className="w-full text-sm text-center text-black">
                                <thead className="text-xs text-amber-600 uppercase bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Ingrediente utilizzato
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Quantità
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Lotto
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Fornitore
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Azioni
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingredients.map((value, index) => {
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-amber-100 border-b border-gray-200' : 'border-b border-gray-200 bg-amber-200'}>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.ingredient}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.quantity}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.lot}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.supplier}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <button className="hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-red-600 duration-200 ease-in-out"
                                                            onClick={() => {
                                                                const newInsertedValues = [...ingredients];
                                                                newInsertedValues.splice(index, 1);
                                                                setIngredients(newInsertedValues);
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
                            </table>
                        }
                    </div>

                    <div className="overflow-x-auto relative mb-20 md:hidden block">
                        {ingredients.length > 0 &&
                            <table className="w-full text-sm text-center text-black">
                                <thead className="text-xs text-amber-600 uppercase bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Ingrediente utilizzato
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Azioni
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingredients.map((value, index) => {
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-amber-100 border-b border-gray-200' : 'border-b border-gray-200 bg-amber-200'}>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.ingredient}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6">
                                                    <div className="flex justify-center items-center">
                                                        <button className="hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-red-600 duration-200 ease-in-out"
                                                            onClick={() => {
                                                                const newInsertedValues = [...ingredients];
                                                                newInsertedValues.splice(index, 1);
                                                                setIngredients(newInsertedValues);
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
                            </table>
                        }
                    </div>
                </div>

            }

            <Footer>
                <div className='fixed'>
                    <Button>
                        <Link to='/step-3'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </Link>
                    </Button>
                </div>
                <div className='flex flex-row-reverse'>
                    <Button>
                        <Link to='/step-5'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </Button>
                    <div className='w-10' />
                    <Button onClick={downloadPdf}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                        </svg>
                    </Button>
                </div>
            </Footer>
        </div >
    );
}

export default PhaseFour;
