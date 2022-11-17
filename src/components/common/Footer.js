import React from 'react';

function Footer(props) {
    return (
        <div className='h-22 bg-gray-800 w-full fixed bottom-0 p-3'>
            {props.children}
        </div>
    );

}

export default Footer;