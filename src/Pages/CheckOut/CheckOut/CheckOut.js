import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user,setUser]=useState({
    //     name:'imran sheikh',
    //     email:"imran@gmail.com",
    //     address:"chpur,Bangdes",
    //     phone:'0183213213'  
    // });


    // const handleAddress = event =>{
    //     console.log(event.target.value);
    //     const {address, ...rest}=user;
    //     const newAddress = event.target.value;
    //     const newUser = {address:newAddress, ...rest};
    //     setUser(newUser)
    // }


    const handlePlaceOrder = e =>{
        e.preventDefault();
        const order = {
            service: service.name,
            email: user.email,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
          .then( response => {
            const {data} =response;
            if(data.insertedId){
                toast('Your order is booked!');
                e.target.reset();
            }
          })

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order:</h2>
            <form onSubmit={handlePlaceOrder}>
            
                <input className='w-100 mb-2' value={user.displayName} type="text" name="name" placeholder='name' required readOnly/>
                <br />
                <input className='w-100 mb-2' value={user.email} type="email" name="email" placeholder='email' readOnly disabled required/>
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder='service'  required/>
                <br />
                <input className='w-100 mb-2' value={user.address} type="text" name="address"  placeholder='address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name="phone" placeholder='phone' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
                </form >
        </div>
    );
};

export default CheckOut;