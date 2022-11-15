import React from 'react';

function Footer(props) {
    return (
        <div className='h-20 bg-amber-600 w-full fixed bottom-0 p-5'>
            {props.children}
        </div>
    );

}

export default Footer;