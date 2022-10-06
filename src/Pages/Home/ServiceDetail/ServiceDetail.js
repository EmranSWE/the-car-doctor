import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId}=useParams();
   const [service]=useServiceDetail(serviceId)
    return (
        <div>
            <h2>You are about to service book:{service.name}</h2>
            <Link className='text-center'
             to={`/checkout/${serviceId}`}><button className=' btn btn-primary'>Proceed CheckOut!</button></Link>
        </div>
    );
};

export default ServiceDetail;