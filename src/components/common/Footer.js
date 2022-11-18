import React from 'react';

function Footer(props) {
    return (
        <div className='h-22 bg-gray-800 w-full fixed bottom-0'>
            <div className='h-1 bg-white top-0'></div>
            <div className='p-3'>
                {props.children}
            </div>
        </div>
    );

}

export default Footer;