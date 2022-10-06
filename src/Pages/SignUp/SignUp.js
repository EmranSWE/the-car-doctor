
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';
import { async } from '@firebase/util';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
  const [agree,setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,user, error,
        loading
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/signup')
    }

    if(loading){
      return <Loading></Loading>
    }
    let errorElement;
    if(error ){
      errorElement= 
          <p className='text-danger'>Error : {error?.message}  </p>
      
       }
    if(user){
        console.log(user)
    }
    const handleSignUp =async (event)=>{
        event.preventDefault();
       const name=event.target.name.value;
       const email=event.target.email.value;
       const password=event.target.password.value;
      //  const agree=event.target.terms.checked;
       
          createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName:name });
          alert('Updated profile');
          navigate('/home');  
    }

   
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary' >Please Login</h2>
            <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control  name='name' required type="text" placeholder="Enter Name" />

        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password' required type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        {/* <label className={agree ? ' ps-2 ':' ps-2 text-danger'} htmlFor="terms">Genius Car terms and Condition</label> */}
        <label className={`ps-2 ${agree ? '':'text-danger'}` } htmlFor="terms">Genius Car terms and Condition</label>
       
       
      </Form.Group>
      <Button disabled={!agree} variant="primary w-100" type="submit">
        Sign Up
      </Button>
    </Form>
    {errorElement}
    <p>Already In Genius Car Service? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={handleNavigate} >Please Login!</Link></p>
    <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;