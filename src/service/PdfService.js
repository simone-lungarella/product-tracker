import axios from 'axios';

const generatePdf = (json, filename) => {
    const config = {
        method: 'POST',
        url: 'http://localhost:8080/foptility/transform/json',
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'blob',
        data: json,
    };


    axios.request(config).then((response) => {
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

const getPhaseTwoPdf = (formValues, lotDefinitions) => {

    const filename = 'TracciabilitaMateriePrime.pdf';
    const items = [];
    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "items": items,
            "lotDefinitions": lotDefinitions,
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

const getPhaseFivePdf = (formValues, year, month) => {

    const filename = 'ControlloPulizie.pdf';
    const items = [];

    Object.keys(formValues).forEach((key) => {
        items.push({ item: formValues[key] });
    });

    const json = {
        "parameters": {
            "filename": filename,
            "year": year,
            "month": month,
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
