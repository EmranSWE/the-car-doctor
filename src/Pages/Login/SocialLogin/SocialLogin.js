import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const img='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png'
    const facebook='https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png';
    const github='https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    if(loading || loading1){
        return <Loading></Loading>
    }
    let errorElement;
   if(error || error1){
    errorElement= 
        <p className='text-danger'>Error : {error?.message}  {error1?.message}</p>
    
     }
    

      if (user || user1) {
       navigate('/home')
      }

    return (
        <div>
               <div className='d-flex align-items-center'>
          
          <div style={{height:'1px'}} className='bg-primary w-50'>
          </div>
         
          <p className='mt-2 px-2'>or</p>
          <div style={{height:'1px'}} className='bg-primary w-50'></div>
          </div>
          {
            errorElement
          }
         
          <div className='my-2'>
              <button onClick={()=>signInWithGoogle()} className='border-0 w-100 rounded bg-info'><img  width='30px' src={img} alt="" /> <span className='px-2'>Google Sign In</span>  </button>
          </div>
          <div className='my-2'>
              <button className='border-0 w-100 rounded bg-info'><img  width='30px' src={facebook} alt="" /> <span className='px-2'>Facebook Sign In</span>  </button>
          </div>
          <div>
              <button onClick={()=>signInWithGithub()} className='border-0 w-100 rounded bg-info'><img  width='30px' src={github} alt="" /> <span className='px-2'>Github Sign In</span>  </button>
          </div>
      
        </div>
     
    );
};

export default SocialLogin;