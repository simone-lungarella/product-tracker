import axios from 'axios';

const generatePdf = (json, filename) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'blob',
    };

    axios.post('http://localhost:8080/foptility/transform/json/generic-table', json, config).then((response) => {
        const file = new Blob([response.data], {
            type: "application/pdf",
        });

        const url = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    }).catch((error) => {
        console.log(error);
    });
}

const getPhaseOnePdf = (formValues) => {

    const filename = 'TracciabilitaPianteESemi.pdf';
    const items = [];
    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }

    generatePdf(json, filename);
}

const getPhaseTwoPdf = (formValues, file) => {

    const filename = 'TracciabilitaMateriePrime.pdf';
    const items = [];
    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }

    generatePdf(json, filename);
}

const getPhaseThreePdf = (formValues, file) => {

    const filename = 'ChecklistMateriePrime.pdf';
    const items = [];
    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }
    
    generatePdf(json, filename);
}

const getPhaseFourPdf = (formValues) => {

    const filename = 'LavorazioneProdottoFinito.pdf';
    const items = [];
    Object.keys(formValues.ingredients).forEach((key) => {
        items.push({ item: formValues.ingredients[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "productInfo": formValues.productInfo,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }

    generatePdf(json, filename);
}

const getPhaseFivePdf = (formValues) => {

    const filename = 'ControlloPulizie.pdf';
    const items = [];

    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }

    generatePdf(json, filename);
}

const getPhaseSixPdf = (formValues) => {
    const filename = 'TracciabilitaProdottoFinito.pdf';
    const items = [];

    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "footer": {
                "title": localStorage.getItem('title') || '',
                "subtitle": localStorage.getItem('subtitle') || '',
            }
        },
    }

    generatePdf(json, filename);
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
