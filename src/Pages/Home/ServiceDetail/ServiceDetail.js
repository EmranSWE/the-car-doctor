import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h2>Welcome to detail:{serviceId}</h2>
            <Link className='text-center' to='/checkout'><button className=' btn btn-primary'>Proceed CheckOut!</button></Link>
        </div>
    );
};

export default ServiceDetail;