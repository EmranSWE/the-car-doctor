
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate=useNavigate();
    const handleSignUp =(event)=>{
        event.preventDefault();
       const name=event.target.name.value;
       const email=event.target.email.value;
       const password=event.target.password.value;
        console.log(name,email,password)
    }

    const handleNavigate=()=>{
        navigate('/signup')
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
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p>Already In Genius Car Service? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={handleNavigate} >Please Login!</Link></p>
        </div>
    );
};

export default SignUp;