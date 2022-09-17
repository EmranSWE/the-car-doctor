import React from 'react';

const Footer = () => {
    return (
       <footer>
        <p className='text-center fs-3 my-5'><small>copyright @ {new Date().getFullYear()}</small></p>
       </footer>
    );
};

export default Footer;