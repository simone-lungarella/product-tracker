import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';

function HelpPage() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <div className='bg-gradient-to-l from-amber-400 to-amber-600 h-fill flex flex-col items-center'>
            <div className='h-10' />
            <h2 className='text-4xl text-amber-50 font-bold ml-10 md:ml-32 mr-10 md:mr-32 mb-5'>Descrizione</h2>
            <h3 className='text-xl ml-10 md:ml-32 mr-10 md:mr-32 text-justify'>Product Tracker è un'app che consente di facilitare il processo di compilazione documentazione in fase di tracciamento prodotti dal processo di lavorazione fino a quello di confezionamento.</h3>

            <div className='flex flex-col items-center'>
                <div className='w-3/4 h-0.5 bg-amber-800 rounded-lg mt-10 mb-5' />
            </div>

            <h2 className='text-2xl text-amber-50 font-bold ml-10 md:ml-32 mr-10 md:mr-32 mb-5'>Configurazione</h2>
            <h3 className='text-xl ml-10 md:ml-32 mr-10 md:mr-32 text-justify'>Prima di iniziare ad usare l'applicazione è necessario configurare il pié pagina con le informazioni personali. Per fare ciò occorre cliccare sull'icona: </h3>
            <span className='material-icons text-amber-800 text-5xl flex flex-col items-center mt-5'>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </span>

            <div className='flex flex-col items-center'>
                <div className='w-3/4 h-0.5 bg-amber-800 rounded-lg mt-10 mb-5' />
            </div>

            <h2 className='text-2xl text-amber-50 font-bold ml-10 md:ml-32 mr-10 md:mr-32 mb-5'>Creazione</h2>

            <h3 className='text-xl ml-10 md:ml-32 mr-10 md:mr-32 text-justify'>Una volta configurato il pié pagina, si può procedere con la compilazione di ciascuno step. Per far ciò occorre cliccare sull'icona: </h3>
            <span className='material-icons text-amber-800 text-5xl flex flex-col items-center mt-5'>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </span>

            <div className='flex flex-col items-center'>
                <div className='w-3/4 h-0.5 bg-amber-800 rounded-lg mt-10 mb-5' />
            </div>

            <h2 className='text-2xl text-amber-50 font-bold ml-10 md:ml-32 mr-10 md:mr-32 mb-5'>Download</h2>
            <h3 className='text-xl ml-10 md:ml-32 mr-10 md:mr-32 text-justify'>A valle della compilazione di un form si può procedere con la stampa. Per far ciò occorre cliccare sull'icona: </h3>
            <span className='material-icons text-amber-800 text-5xl flex flex-col items-center mt-5'>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                </svg>
            </span>

            <div className='flex flex-col items-center mt-20 mb-10'>
                <Button>
                    <Link className='text-2xl' to='/'>
                        Capito!
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default HelpPage;