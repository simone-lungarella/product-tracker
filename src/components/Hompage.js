import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';
import MenuButton from './common/MenuButton';
import Configuration from './misc/Configuration';

function Homepage() {

    const [configurationOpen, setConfigurationOpen] = useState(false);

    return (
        <div>
            <div className='bg-gradient-to-bl from-amber-400 to-amber-600 h-screen'>
                <Footer>
                    <div className='fixed flex flex-row gap-10'>
                        <MenuButton>
                            <Link to='/help'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Link>
                        </MenuButton>
                        <MenuButton onClick={() => setConfigurationOpen(true)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </MenuButton>
                    </div>

                    <div className='flex flex-row-reverse'>
                        <MenuButton>
                            <Link to='/step-1'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </Link>
                        </MenuButton>
                    </div>
                </Footer>
                {
                    configurationOpen &&
                    (<div className="z-10 inset-0 overflow-y-auto bg-amber-900 bg-opacity-25 fixed flex justify-center items-center"
                        aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <Configuration handleClose={() => setConfigurationOpen(false)} />
                    </div>)
                }

                {/* TODO: To keep or not to keep? */}
                <div className="w-20 h-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="fixed bg-rose-600 w-10 h-10 rounded-full blur-md top-1/4 left-1/4 transform translate(0px, 0px)" />
                    <div className="fixed bg-violet-300 w-10 h-10 rounded-full blur-sm animate-blob top-1/4 left-1/4 transform translate(0px, 0px)" />
                    <div className="fixed bg-violet-400 w-10 h-10 rounded-full blur-sm animate-mirrorBlob top-1/4 left-1/4 transform translate(0px, 0px) mix-blend-multiply" />
                    <div className="fixed bg-violet-300 w-10 h-10 rounded-full blur-sm animate-invertedBlob top-1/4 left-1/4 transform translate(0px, 0px)" />
                    <div className="fixed bg-violet-400 w-10 h-10 rounded-full blur-sm animate-invertedMirrorBlob top-1/4 left-1/4 transform translate(0px, 0px) mix-blend-multiply" />
                </div >
            </div >
        </div >

    );
}

export default Homepage;