import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';
import MenuButton from './common/MenuButton';
import HelpPage from './HelpPage';
import Configuration from './misc/Configuration';

function Homepage() {

    const [configurationOpen, setConfigurationOpen] = useState(false);

    return (
        <div>
            <div className='bg-gradient-to-bl from-amber-400 to-amber-600 h-screen md:h-fill'>

                <div className='flex flex-col items-center justify-center'>
                    <HelpPage />
                </div>

                <Footer>
                    <div className='flex place-content-center gap-2'>
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
                    </div>
                </Footer>
                {
                    configurationOpen &&
                    (<div className="z-10 inset-0 overflow-y-auto bg-gradient-to-t from-gray-900/50 to-gray-800/50 fixed flex justify-center items-center">
                        <Configuration handleClose={() => setConfigurationOpen(false)} />
                    </div>)
                }

            </div >
        </div >

    );
}

export default Homepage;