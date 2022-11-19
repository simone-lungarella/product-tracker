import { Field, Form, Formik } from "formik";
import MenuButton from '../common/MenuButton';

function Configuration(props) {

    return (
        <div className="grid place-content-center bg-gradient-to-t from-gray-800 to-amber-900 rounded p-4">
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
                                <label className='text-md md:text-xl font-bold mb-2 text-white' htmlFor='title'>Titolo</label>
                                <Field as="textarea" rows='2' cols='30' id='title' name='title' placeholder="Titolo" />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-md md:text-xl font-bold mb-2 text-white' htmlFor='title'>Sottotitolo</label>
                                <Field as="textarea" rows='2' cols='30' id='subtitle' name='subtitle' placeholder="Sottotitolo" />
                            </div>
                        </div>
                        <div className="flex mt-10 place-content-center gap-4">
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
