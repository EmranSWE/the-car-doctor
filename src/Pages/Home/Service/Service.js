import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>name:{name}</h2>
            <p><small>{description}</small></p>
            <p><small>{price}</small></p>
            <button className='bg-primary text-light border-0'> Add to buy</button>
            
        </div>
    );
};

export default Service;