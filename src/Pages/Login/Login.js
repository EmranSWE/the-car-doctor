import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from '../Shared/dynamicTitle/DynamicTitle';
import axios from 'axios';

const Login = () => {
  const emailChange = useRef('');
  const passwordChange = useRef('');
  const location=useLocation();
  const from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user,error
  ] = useSignInWithEmailAndPassword(auth);
  const navigate=useNavigate();
  let errorElement;
  if(error ){
   errorElement=
       <p className='text-danger'>Error : {error?.message} </p>
   
    }

  
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailChange.current.value;
    const password = passwordChange.current.value;
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:5000/login',{email});
    localStorage.setItem('accessToken',data.accessToken);
    navigate(from, {replace: "true"})
  }

  const resetPassword= async()=>{
    const email=emailChange.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast('Sent email');
    }
    else{
      toast('Please enter your email')
    }
  }
  

  return (
    <div className='container w-50 mx-auto'>
      <DynamicTitle title='Login'></DynamicTitle>
      <h2 className='text-primary' >Please Login</h2>
      <Form onSubmit={handleLogin}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailChange} required type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordChange} required type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary w-100 mx-auto" type="submit">
          Login
        </Button>
      </Form>
      {
        errorElement
      }
      <p>New in Genius Car Service? <Link to='/signup' className='text-primary text-decoration-none pe-auto' >Please Sign Up!</Link></p>
      <p>Forget Password? <button  className='text-primary border-0 pe-auto' onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;