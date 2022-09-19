import React from 'react';

const NotFound = () => {
    const img='https://images.unsplash.com/photo-1560948799-e17458123a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    return (
        <div>
            <h2 className='text-center text-primary'>Mechanic Is Sleeping</h2>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default NotFound;