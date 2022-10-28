import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'

function PhaseOne() {

    return (
        <div className='bg-green-50 h-screen'>

            <div className='grid place-content-center h-20 bg-green-500 w-full'>
                <div className='text-center text-white text-2xl font-bold'>
                    <h1 className='text-4xl font-bold' >1. Tracciamento</h1>
                </div>
            </div>
            <div className='grid place-content-center h-1 bg-green-800 w-full' />
            <div className='h-10' />


            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    // TODO: Gestire Fase 1
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <div className='grid place-content-center  grid-cols-2 md:grid-cols-4 gap-4 p-4' >
                        <label className='' htmlFor='Email'>
                            Email
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10' id='email' name='email' />
                        <ErrorMessage component='a' className='border-b w-1/5 border-red-700 lg:w-1/4' name='email' />
                        <label className='' htmlFor='password'>
                            Password
                        </label>
                        <Field className='border-2 border-green-500 rounded-lg h-10' id='password' name='password' />
                        <ErrorMessage
                            component='a'
                            className='border-b w-1/5 border-red-700 lg:w-1/4'
                            name='password'
                        />
                    </div>
                    <div className='mt-8 p-5 position-flex-end'>
                        <button type='submit' className='text-2xl bg-green-500 hover:bg-green-700 text-black font-bold py-4 w-40 rounded'>
                            Successivo
                        </button>
                    </div>
                </Form>
            </Formik>

            <div className='h-10 bg-green-800 w-full absolute bottom-0' />
        </div>
    );
}

export default PhaseOne;