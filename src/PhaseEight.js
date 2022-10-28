import { Field, Form, Formik } from 'formik';
import React from 'react';

function PhaseEight() {

    // Use state on insertedValues to update the page
    const [insertedValues, setInsertedValues] = React.useState([]);


    return (
        <div className='bg-green-50 h-screen'>

            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >8. Tracciabilità piante e semi</h1>
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
                    setInsertedValues([...insertedValues, values]);
                    resetForm();
                }}
            >
                <Form>
                    <div className='grid place-content-center  grid-cols-2 md:grid-cols-4 gap-4 p-4' >
                        <label className='' htmlFor='plants'>
                            Piante o semi acquistati
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10 p-2.5' id='plants' name='plants' />

                        <label className='' htmlFor='lot'>
                            Lotto
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10 p-2.5' id='lot' name='lot' />

                        <label className='' htmlFor='compliant'>
                            Conforme
                        </label>
                        <Field type="checkbox" className='form-checkbox border-2 border-green-500 rounded-lg h-10 accent-green-700' id='compliant' name='compliant' />

                        <label className='' htmlFor='kg'>
                            Kg o colli acquistati
                        </label>
                        <Field type='number' className='text-sm rounded-lg focus:ring-green-500 block w-full p-2.5 border-2 border-green-500 rounded-lg h-10' id='kg' name='kg' />

                    </div>
                    <div className='mt-8 p-5 position-flex-end'>
                        <button type='submit' className='text-2xl bg-green-500 hover:bg-green-700 text-black font-bold py-4 w-40 rounded'>
                            Aggiungi
                        </button>
                    </div>
                </Form>
            </Formik>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-black">
                    <thead className="text-xs text-green-700 uppercase bg-gray-700">
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
                                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
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
                                            Elimina
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='h-10 bg-green-800 w-full absolute bottom-0' />
        </div >
    );
}

export default PhaseEight;