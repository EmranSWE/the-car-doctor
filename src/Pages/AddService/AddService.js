import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url=`http://localhost:5000/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=> {
            console.log(result)
        });
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Add a new Service</h1>
    <form className='d-flex flex-column'  onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2'  placeholder='Name'  {...register("name")} />
      <textarea className='mb-2'  placeholder="Description" {...register("description")} />
      <input className='mb-2' placeholder='Price'  {...register("price", { required: true })} />
      <input className='mb-2' placeholder='Photo URL'  {...register("img", { required: true })} />
      
      <input type="submit" value='Add Service' />
    </form>
        </div>
    );
};

export default AddService;