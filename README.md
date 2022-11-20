<h1 align="center"> Product Tracker </h1>
<h3 align="center"> Application that follows a user and helps to describe the product track in various phases allowing to download a printable version of all the documentation. </h3>


<p align="center" >
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

---

A simple <strong>SPA</strong> built with <i>React</i> and <i>Tailwind CSS</i> and make use of <i>formik</i> and <i>yup</i> for form validation, and <i>react-router-dom</i> for page routing. 

The application consent to generated PDF documentation associated with product tracking workflow relative to Italian land production of small enterprises.

Currently are handled only 6 types of documents that are the following:

<ul>
  <li>Tracciabilità piante e semi</li>
  <li>Tracciabilità materie prime</li>
  <li>Checlist materie prime</li>
  <li>Tracciabilità prodotto finito (lavorazione)</li>
  <li>Controllo pulizie</li>
  <li>Tracciabilità prodotto finito</li>
</ul>

Exists a page for each PDF and every page consent to input and validate data associated with the relative template and then download the PDF.

The six phases pages are antecedent by a page that consent to input and validate data about with the footer. So the personalize each downloadable PDF.

The application make use of a deployed Spring boot application deployed on Heroku: <a>https://foptility.herokuapp.com/openapi/ui</a> and the static page itself is deployed on another server. Both application are free to use and the code is open source, if you want help with the maintaining of the servers you can donate with:

[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=B4AGF9F8W7DHJ)
