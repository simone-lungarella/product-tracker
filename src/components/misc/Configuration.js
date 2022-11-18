import { Field, Form, Formik } from "formik";
import MenuButton from '../common/MenuButton';

function Configuration(props) {

    return (
        <div className="grid place-content-center bg-gray-800 rounded p-4">
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
                                <label className='text-xl font-bold mb-2 text-white' htmlFor='title'>Titolo</label>
                                <Field as="textarea" rows='2' cols='40' className='border-2 focus:border-amber-300 focus:ring-amber-300 rounded-lg h-20 p-2.5 disabled:bg-amber-50' id='title' name='title' placeholder="Titolo" />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-xl font-bold mb-2 text-white' htmlFor='title'>Sottotitolo</label>
                                <Field as="textarea" rows='2' cols='40' className='border-2 focus:border-amber-300 focus:ring-amber-300 rounded-lg h-20 p-2.5 disabled:bg-amber-50' id='subtitle' name='subtitle' placeholder="Sottotitolo" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-10 mr-20 ml-20">
                            <MenuButton type='submit'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </MenuButton>
                            <MenuButton onClick={props.handleClose} >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </MenuButton>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default Configuration;
