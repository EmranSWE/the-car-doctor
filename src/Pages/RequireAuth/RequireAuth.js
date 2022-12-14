import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user,loading]=useAuthState(auth);
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace />;
    }
        if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
        return <div className='text-center'>
            <h3 className='text-danger'>Your email is not verified!</h3>
            <h5 className='text-warning'>Please verify your email</h5>
            <button
            className='bg-primary rounded border-0'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}>Sent verification Email</button>
     
        </div>
        
    }

    return children;
};

export default RequireAuth;