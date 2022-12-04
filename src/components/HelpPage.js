import { React } from 'react';

function HelpPage() {

    return (
        <div className='p-4 md:p-8 px-4 py-2 rounded prose col-span-1 max-w-xl md:max-w-none md:col-span-2 lg:col-span-3'>
            <h1>
                Benvenuto!
            </h1>
            <h3>
                Come funziona?
            </h3>
            <p>Quest'app consente di facilitare il processo di compilazione della documentazione relativa al tracciamento di prodotti. Procedi nel seguente modo: </p>

            <ol>
                <li>Configura il <strong>pié pagina</strong> con le informazioni della tua azienda.</li>
                <li>Procedi alla compilazione dei form per ogni fase del processo lavorativo.</li>
                <li>Scarica la versione <strong>PDF</strong> del file e verificane l'esattezza.</li>
            </ol>
        </div>
    );
}

export default HelpPage;