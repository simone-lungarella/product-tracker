import { React, useRef, useState } from 'react';
import { Field, Form, Formik } from 'formik';

const selectableValues = [
    "Contenitori rifiuti",
    "Contenitori",
    "Utensili vari",
    "Scaffalatura",
    "Servizi igienici",
    "Rubinetteria sanitaria",
    "Passa pomodori",
    "Forno essiccazione",
    "Bilancia",
    "Banchi d'acciaio",
    "Taglieri",
    "Lavelli",
    "Finestre-vetri",
    "Soffitti e pareti non lavabili",
];

function PhaseFive() {

    const formRef = useRef()

    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit()
        }
    }

    let daysOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const valuesToInsert = daysOfMonth.map((day) => {
        return {
            day: day,
            description: '',
        }
    })

    const [insertedValues, setInsertedValues] = useState(valuesToInsert);
    const [lastCopiedDescription, setLastCopiedDescription] = useState('');

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1);

    return (
        <div className='bg-green-50 h-full'>
            {modalOpen &&
                <div className="grid place-content-center overflow-y-auto fixed z-50 w-auto md:inset-0 h-full p-4 bg-black bg-opacity-50">
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
                                        <h1 className="text-2xl font-bold ml-10 mr-10">Seleziona attrezzatura</h1>
                                    </div>
                                </div>
                                <div className="h-10" />
                                <div className="grid place-content-center">
                                    <Formik
                                        initialValues={{
                                            selectedDay: selectedDay,
                                            description: insertedValues[selectedDay - 1].description,
                                        }}
                                        onSubmit={(values) => {
                                            let newValues = insertedValues.map((value) => {
                                                if (value.day === values.selectedDay) {
                                                    return {
                                                        day: value.day,
                                                        description: values.description,
                                                    }
                                                } else {
                                                    return {
                                                        day: value.day,
                                                        description: value.description,
                                                    }
                                                }
                                            })
                                            setInsertedValues(newValues);
                                            setModalOpen(false);
                                        }}
                                    >
                                        {({ handleSubmit }) => (
                                            <Form ref={formRef} onSubmit={handleSubmit}>
                                                <div className="grid place-content-center">
                                                    {selectableValues.map((value) => {
                                                        return (
                                                            <div className="grid grid-cols-3" key={value}>
                                                                <div className="place-items-start ml-5 col-span-2">
                                                                    <label className="inline-flex items-center">
                                                                        <span className="ml-2 text-gray-700">{value}</span>
                                                                    </label>
                                                                </div>
                                                                <div className="grid place-items-end mr-5">
                                                                    <Field type="checkbox" name="description" value={value} className="place-items-end border-green-500 text-green-600 bg-gray-100 form-checkbox focus:ring-green-500 rounded-md h-5 w-5" />
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="h-10" />
                                                <div className="grid place-content-center">
                                                    <button
                                                        type="submit"
                                                        className="text-base hover:scale-110 focus:outline-none flex justify-center px-14 py-6 rounded font-bold cursor-pointer 
                                                                hover:bg-green-300  
                                                                bg-green-200 
                                                                text-green-800 
                                                                border duration-200 ease-in-out 
                                                                border-green-700 transition py-4 w-40" >
                                                        Conferma
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
            }
            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='md:text-4xl sm:text-2xl font-bold' >Controllo Pulizie</h1>
                </div>
            </div>
            <div className='grid place-content-center h-1 bg-green-800 w-full' />

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="md:text-xl text-green-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Giorno
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Attrezzature e locali
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Azioni
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {insertedValues.map((value, index) => {
                            return (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200 border-b border-gray-200 hover:bg-gray-50 hover:border-green-700' : 'bg-gray-100 border-gray-200 hover:border-green-700 border-b hover:bg-gray-50 bg-gray-100'}>
                                    <td className="py-3 px-6">
                                        <div className="flex justify-center items-center">
                                            <div className="mr-2">
                                                <span className="font-bold text-green-700">{value.day}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="flex justify-center items-center">
                                            <div>
                                                {value.description && value.description.map((description, index) => {
                                                    if (index === value.description.length - 1) {
                                                        return (
                                                            <span key={index} className="font-bold text-green-700">{description}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <span key={index} className="font-bold text-green-700">{description}, </span>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6">
                                        <div className="flex justify-center items-center">
                                            <div className="md:mr-2 grid place-items-center md:grid-cols-3 sm:grid-cols-1">
                                                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-green-800 duration-200 ease-in-out'
                                                    onClick={() => {
                                                        setModalOpen(true);
                                                        setSelectedDay(value.day);
                                                    }} >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                    </svg>
                                                </button>
                                                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-green-800 duration-200 ease-in-out'
                                                    onClick={
                                                        () => {
                                                            setLastCopiedDescription(value.description);
                                                        }
                                                    } >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                                    </svg>
                                                </button>
                                                <button className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 cursor-pointer text-green-800 duration-200 ease-in-out'
                                                    onClick={
                                                        () => {
                                                            let newInsertedValues = [...insertedValues];
                                                            newInsertedValues[index].description = lastCopiedDescription;
                                                            setInsertedValues(newInsertedValues);
                                                        }
                                                    } >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='h-20' />

            <div className='h-20 bg-green-800 w-full fixed bottom-0' >
                <div className='p-5'>
                    <div className='fixed'>
                        <button type="button" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-200  
                            bg-green-100 
                            text-green-700 
                            border duration-200 ease-in-out 
                            border-green-600 transition" >
                            <a href='/step-4'>
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
                            <a href='/step-6'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </button>
                        <div className='w-10' />
                        <button type="submit" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-green-200  
                            bg-green-100 
                            text-green-700 
                            border duration-200 ease-in-out 
                            border-green-600 transition"
                            onClick={handleSubmit}>
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

export default PhaseFive;
