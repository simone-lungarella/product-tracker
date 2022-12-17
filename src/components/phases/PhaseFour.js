import { Field, Form, Formik } from 'formik';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PdfService from '../../service/PdfService';
import Button from '../common/Button';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MenuButton from '../common/MenuButton';

function PhaseFour() {

    const [ingredients, setIngredients] = useState([]);
    const [productInfo, setProductInfo] = useState({});

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');


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
        <div className='bg-amber-50 h-fill'>

            {modalOpen &&
                <div className="backdrop-blur-sm grid place-content-center overflow-y-auto fixed z-50 w-auto md:inset-0 h-full p-2 bg-black bg-opacity-50">
                    <div className="relative bg-amber-50 rounded shadow-lg border-4 p-4 border-white/75">
                        <div className='grid grid-cols-2'>

                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={() => { setModalOpen(false) }} >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="flex flex-col font-bold text-2xl text-black">
                                <h1>Modifica</h1>
                            </div>
                        </div>
                        <div className='h-1 bg-black/75 rounded w-full m-4 mx-auto shadow-lg' />

                        <div className="flex flex-col items-center">

                            <div className="grid place-content-center">
                                <Formik
                                    initialValues={{
                                        ingredient: selectedItem.ingredient,
                                        quantity: selectedItem.quantity,
                                        lot: selectedItem.lot,
                                        supplier: selectedItem.supplier,
                                    }}
                                    onSubmit={(values) => {
                                        const index = ingredients.indexOf(selectedItem);
                                        ingredients[index] = values;
                                        setIngredients(ingredients);
                                        setModalOpen(false);
                                    }}>

                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4 items-center' >
                                                <label htmlFor='ingredient'>
                                                    Ingrediente utilizzato
                                                </label>
                                                <Field type='text' id='ingredient' name='ingredient' placeholder="Ingrediente" className={errors.ingredient && touched.ingredient ? 'border-red-500' : ''} />
                                                <div className='hidden md:block w-20' />

                                                <label htmlFor='quantity'>
                                                    Quantità
                                                </label>
                                                <Field type='text' id='quantity' name='quantity' placeholder='Quantity' className={errors.quantity && touched.quantity ? 'border-red-500' : ''} />

                                                <label htmlFor='lot'>
                                                    Lotto
                                                </label>
                                                <Field type='text' id='lot' name='lot' placeholder="Lotto" className={errors.lot && touched.lot ? 'border-red-500' : ''} />
                                                <div className='hidden md:block w-20' />

                                                <label htmlFor='supplier'>
                                                    Fornitore
                                                </label>
                                                <Field type='text' id='supplier' name='supplier' placeholder="Fornitore" className={errors.supplier && touched.supplier ? 'border-red-500' : ''} />
                                            </div>

                                            <div className='grid place-content-center mt-5'>
                                                <Button type='submit' className='bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded'>
                                                    Conferma
                                                </Button>
                                            </div>
                                        </Form>)}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <Header title='Tracciabilità prodotto finito' />

            <div className='grid place-content-center h-1 bg-gradient-to-b from-amber-600 to-amber-100 w-full' />
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
                    expirationDate: Yup.date().required('Data di scadenza obbligatoria'),
                })}
            >
                {({ errors, touched, values }) => (
                    <Form>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4 items-center' >
                            <label htmlFor='date'>
                                Data di produzione
                            </label>
                            <div className="relative">
                                <div className="flex md:hidden absolute inset-y-0 left-3 items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>

                                <Field disabled={!productEditable} id='date' name='date' type='date' className={errors.date && touched.date ? 'border-red-500 pl-8 md:pl-2' : 'pl-8 md:pl-2'} />
                            </div>
                            <div className='hidden md:block w-20' />

                            <label htmlFor='name'>
                                Tipo di prodotto
                            </label>
                            <Field disabled={!productEditable} type='text' id='name' name='name' placeholder="Tipo prodotto" className={errors.name && touched.name ? 'border-red-500' : ''} />
                            <label htmlFor='cookingType'>
                                Trattamento termico
                            </label>
                            <Field
                                type='select'
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
                            <Field type="number" id='cookingTime' name='cookingTime' disabled={!productEditable} />
                            <label htmlFor='temperature'>
                                Temperatura (&#8451;)
                            </label>
                            <Field type="number" id='temperature' name='temperature' disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='coverLot'>
                                Lotto tappi o coperchi
                            </label>
                            <Field type='text' id='coverLot' name='coverLot' placeholder="Lotto" disabled={!productEditable} />
                            <label htmlFor='size'>
                                Formato (g/ml)
                            </label>
                            <Field type='text' id='size' name='size' placeholder="Formato" disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='productLot'>
                                Lotto prodotto finito
                            </label>
                            <Field type='text' id='productLot' name='productLot' placeholder="Lotto prodotto" disabled={!productEditable} className={errors.productLot && touched.productLot ? 'border-red-500' : ''} />
                            <label htmlFor='numberPacks'>
                                N. confezioni ottenute
                            </label>
                            <Field type="number" id='numberPacks' name='numberPacks' disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='expirationDate'>
                                Data di scadenza
                            </label>
                            <div className="relative">
                                <div className="flex md:hidden absolute inset-y-0 left-3 items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>

                                <Field id='expirationDate' name='expirationDate' type='date' disabled={!productEditable} className={errors.expirationDate && touched.expirationDate ? 'border-red-500 pl-8 md:pl-2' : 'pl-8 md:pl-2'} />
                            </div>
                            <label htmlFor='lotBottles'>
                                Lotto bottiglie o vasetti
                            </label>
                            <Field type='text' id='lotBottles' name='lotBottles' placeholder="Lotto bottiglie" disabled={!productEditable} />
                            <div className='hidden md:block w-20' />

                            <label htmlFor='notes'>
                                Note
                            </label>
                            <Field as="textarea" type='textarea' name='notes' placeholder="Note..." disabled={!productEditable} />
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
                    <div className='h-1 bg-amber-300 divider w-3/4 mx-auto shadow-inner mb-5 mt-5 rounded-full' />
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
                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4 items-center' >
                                    <label htmlFor='ingredient'>
                                        Ingrediente utilizzato
                                    </label>
                                    <div className='relative' >
                                        <Field type='text' id='ingredient' name='ingredient' placeholder="Ingrediente" className={errors.ingredient && touched.ingredient ? 'border-red-500' : ''} />
                                        {errors.ingredient && touched.ingredient ? (
                                            <div className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3 text-red-600" >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='hidden md:block w-20' />

                                    <label htmlFor='quantity'>
                                        Quantità
                                    </label>
                                    <div className='relative' >
                                        <Field type='text' id='quantity' name='quantity' placeholder='Quantity' className={errors.quantity && touched.quantity ? 'border-red-500' : ''} />
                                        {errors.quantity && touched.quantity ? (
                                            <div className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3 text-red-600" >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : null}
                                    </div>

                                    <label htmlFor='lot'>
                                        Lotto
                                    </label>
                                    <div className='relative' >
                                        <Field type='text' id='lot' name='lot' placeholder="Lotto" className={errors.lot && touched.lot ? 'border-red-500' : ''} />
                                        {errors.lot && touched.lot ? (
                                            <div className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3 text-red-600" >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='hidden md:block w-20' />

                                    <label htmlFor='supplier'>
                                        Fornitore
                                    </label>
                                    <div className='relative' >
                                        <Field type='text' id='supplier' name='supplier' placeholder="Fornitore" className={errors.supplier && touched.supplier ? 'border-red-500' : ''} />
                                        {errors.supplier && touched.supplier ? (
                                            <div className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3 text-red-600" >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : null}
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

                    <div className="overflow-x-auto relative mb-20">
                        {ingredients.length > 0 &&
                            <table className="w-full text-sm text-center text-black">
                                <thead className="text-xs text-amber-600 uppercase bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Ingrediente utilizzato
                                        </th>
                                        <th scope="col" className="py-3 px-6 hidden md:table-cell">
                                            Quantità
                                        </th>
                                        <th scope="col" className="py-3 px-6 hidden md:table-cell">
                                            Lotto
                                        </th>
                                        <th scope="col" className="py-3 px-6 hidden md:table-cell">
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
                                                <td className="py-3 px-6 hidden md:table-cell">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.quantity}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 hidden md:table-cell">
                                                    <div className="flex justify-center items-center">
                                                        <span className="font-bold text-amber-700">{value.lot}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 hidden md:table-cell">
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
                                                            }}>
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                            </svg>
                                                        </button>
                                                        {/* Edit button */}
                                                        <button className="hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-black duration-200 ease-in-out"
                                                            onClick={() => {
                                                                setSelectedItem(value);
                                                                setModalOpen(true);
                                                            }}>
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
                    <MenuButton>
                        <Link to='/step-3'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                </div>
                <div className='flex flex-row-reverse'>
                    <MenuButton>
                        <Link to='/step-5'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                    <div className='w-10' />
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

export default PhaseFour;
