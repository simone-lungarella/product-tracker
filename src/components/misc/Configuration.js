import { Field, Form, Formik } from "formik";
import Button from "../common/Button";

function Configuration(props) {

    return (
        <div className="grid place-content-center bg-amber-50 rounded p-4 shadow-lg border-4 border-white/75">
            <div className='grid grid-cols-2'>
                <div className='right-0 font-bold text-2xl text-black flex flex-row'>
                    <h3>Pié pagina</h3>
                </div>
                <div className='right-0 text-2xl text-black flex flex-row-reverse'>
                    <button onClick={props.handleClose} className='hover:scale-110 cursor-pointer duration-200 ease-in-out transition'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='h-1 bg-black/75 rounded w-full m-4 mx-auto shadow-lg' />

            <Formik
                initialValues={{
                    title: localStorage.getItem('title') || '',
                    subtitle: window.localStorage.getItem('subtitle') || '',
                }}
                onSubmit={(values) => {
                    localStorage.setItem('title', values.title);
                    localStorage.setItem('subtitle', values.subtitle);
                    props.handleClose();
                }} >
                {() => (
                    <Form>
                        <div className='grid grid-cols-1 md:p-4 gap-2' >
                            <div className='flex flex-col'>
                                <label className='text-md md:text-xl font-bold mb-2 text-black' htmlFor='title'>Titolo</label>
                                <Field as="textarea" rows='2' cols='30' id='title' name='title' placeholder="Titolo" />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-md md:text-xl font-bold mb-2 text-black' htmlFor='title'>Sottotitolo</label>
                                <Field as="textarea" rows='2' cols='30' id='subtitle' name='subtitle' placeholder="Sottotitolo" />
                            </div>

                            <div className='flex flex-col mt-10'>
                                <Button type='submit'>
                                    <h1 className='text-md md:text-xl font-bold text-black/75' >CONFERMA</h1>
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Configuration;
