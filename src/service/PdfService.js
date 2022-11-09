import axios from 'axios';

const generatePdf = (json, file, filename) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    const formData = new FormData();
    formData.append('json', JSON.stringify(json));
    formData.append('file', file);

    axios.post('http://localhost:8080/foptility/transform/json', formData, config).then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
    }).catch((error) => {
        console.log(error);
    });
}

const getPhaseOnePdf = (json, file) => {
    generatePdf(json, file, 'TracciabilitaPianteESemi.pdf');
}

const getPhaseTwoPdf = (json, file) => {
    generatePdf(json, file, 'TracciabilitaMateriePrime.pdf');
}

const getPhaseThreePdf = (json, file) => {
    generatePdf(json, file, 'ChecklistMateriePrime.pdf');
}

const getPhaseFourPdf = (json, file) => {
    generatePdf(json, file, 'LavorazioneProdottoFinito.pdf');
}

const getPhaseFivePdf = (json, file) => {
    generatePdf(json, file, 'ControlloPulizie.pdf');
}

const getPhaseSixPdf = (json, file) => {
    generatePdf(json, file, 'TracciabilitaProdottoFinito.pdf');
}

const PdfService = {
    getPhaseOnePdf,
    getPhaseTwoPdf,
    getPhaseThreePdf,
    getPhaseFourPdf,
    getPhaseFivePdf,
    getPhaseSixPdf,
}

export default PdfService
