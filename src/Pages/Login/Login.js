import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailChange = useRef('');
  const passwordChange = useRef('');


  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailChange.current.value;
    const password = passwordChange.current.value;
    console.log(email, password)
  }


  return (
    <div className='container w-50 mx-auto'>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>New in Genius Car Service? <Link to='/signup' className='text-danger text-decoration-none pe-auto' >Please Sign Up!</Link></p>
    </div>
  );
};

export default Login;