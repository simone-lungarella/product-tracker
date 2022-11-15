import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './common/MenuButton';
import Configuration from './misc/Configuration';

function Homepage() {

    const [configurationOpen, setConfigurationOpen] = useState(false);

    return (
        <div>
            <div className='bg-gradient-to-r from-amber-400 to-amber-600 h-screen'>
                <div className="bg-gray-800 h-screen w-20 left-0 justify-center items-center flex flex-col">
                    <div className="flex flex-col gap-2">
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
                        <MenuButton>
                            <Link to='/step-1'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </Link>
                        </MenuButton>
                        {/* TODO: Dark mode button */}
                        <div className='divide-x border bg-amber-200 mt-10 mb-10'/>
                        <MenuButton>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707M16.95 16.95l-.707-.707M7.05 7.05l-.707-.707M16.243 7.757l.707.707M6.343 17.657l.707.707M17.657 6.343l-.707.707M7.757 16.243l-.707.707"></path>
                            </svg>
                        </MenuButton>

                    </div>
                </div>
                {
                    configurationOpen &&
                    (<div className="z-10 inset-0 overflow-y-auto bg-amber-900 bg-opacity-25 fixed flex justify-center items-center"
                        aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <Configuration handleClose={() => setConfigurationOpen(false)} />
                    </div>)
                }

            </div >
        </div >

    );
}

export default Homepage;