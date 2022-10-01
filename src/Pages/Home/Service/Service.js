import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id,name,img,description,price}=service;
    const navigate=useNavigate();
    const handleButtonNavigate = id =>{
        navigate(`service/${id}`)
    }
    return (
        <div _id='service' className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>name:{name}</h2>
            <p><small>{description}</small></p>
            <p><small>{price}</small></p>
            <button onClick={()=>handleButtonNavigate(_id)} className='bg-primary text-light border-0'> Add to buy</button>
            
        </div>
    );
};

export default Service;