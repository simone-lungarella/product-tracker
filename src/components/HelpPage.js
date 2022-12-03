import { React } from 'react';

function HelpPage() {

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-between gap-2 md:gap-8 p-4 md:p-8'>

            <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify col-span-1 max-w-xl md:max-w-none md:col-span-2 lg:col-span-3
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                <h3>Usa quest'app per facilitare il processo di compilazione documentazione in fase di tracciamento prodotti
                    dal <strong> processo di lavorazione </strong> fino a quello di <strong>confezionamento</strong>.</h3>
            </div>

            <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                <h3 className='text-xl text-justify'>Prima di iniziare ad usare l'applicazione è necessario configurare il <strong>pié pagina</strong> con le informazioni personali.</h3>

                <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
            </div>

            <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                <h3 >Una volta configurato il pié pagina, si può procedere con la compilazione di ciascuno step.</h3>

                <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>
            </div>

            <div className='px-4 py-2 rounded-xl shadow-xl bg-gradient-to-bl from-amber-50 to-amber-50/50 text-xl text-justify max-w-xl md:max-w-xl relative h-32 lg:h-32
                hover:shadow-2xl hover:from-amber-100 hover:to-amber-100/50 transition duration-500 ease-in-out transform hover:-translate-y-1'>
                <h3>A valle della compilazione di un form si può procedere con la stampa.</h3>

                <div className='text-amber-800/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HelpPage;