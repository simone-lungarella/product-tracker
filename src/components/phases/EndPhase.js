import { React } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
import MenuButton from '../common/MenuButton';
import Button from '../common/Button';


function EndPhase() {

    const handleDonation = () => {
        window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=B4AGF9F8W7DHJ';
    }

    return (
        <div className='bg-gradient-to-br from-amber-50/95 to-amber-100 h-screen md:h-fill'>

            <div className='p-4 md:p-8 px-4 py-2 rounded prose col-span-1 max-w-xl md:max-w-none md:col-span-2 lg:col-span-3'>
                <h1>
                    Tracciamento completato!
                </h1>
                <h2>Grazie per aver utilizzato l'app.</h2>
                <p>Da questa sezione puoi decidere di: </p>
                <ul>
                    <li>Ritornare alla pagina precedente relativa alla fase 6.</li>
                    <li>Procedere con il tracciamento di un nuovo prodotto ripartendo dalla fase 1.</li>
                    <li>Ritornare alla <strong>homepage</strong> per rivedere le configurazioni locali.</li>
                    <li>Contribuire al mantenimento dei server attraverso una donazione: <div className='flex flex-row place-content-center'>
                        <Button onClick={handleDonation}>
                            Paypal
                        </Button>
                    </div></li>
                </ul>

            </div>

            <Footer>
                <div className='flex place-content-center gap-2'>
                    <MenuButton>
                        <Link to='/step-6'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </Link>
                    </MenuButton>

                    <MenuButton>
                        <Link to='/step-1'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                    <MenuButton>
                        <Link to='/'>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </Link>
                    </MenuButton>
                </div>

            </Footer>
        </div >
    );
}

export default EndPhase;
