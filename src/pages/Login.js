import React,{useState,useRef} from 'react'
import { useStateContext } from '../store/StateContext';

const Login = () => {
  const cxt=useStateContext();
  const [isLoader, setIsLoader] = useState(false);
  const[isAlert,setIsAlert]=useState(false);
const email=useRef();
const password=useRef();

  

  const submitlogindetail=async (e)=>{
e.preventDefault();
setIsLoader(true);
const enteredEmail=email.current.value;
const enteredPassword=password.current.value;
try{
const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9GUyT_XYB3Ud1rD-7P0hYccPO8U_v6tw',{
  method:'POST',
  body:JSON.stringify({
email:enteredEmail,
password:enteredPassword,
returnSecureToken:true
  }),
  headers:{
    'Content-Type':'application/json'
  }
})
if(res.ok){
  res.json().then((data)=>{
console.log('Logg in successfully');
cxt.setEmail(enteredEmail);
cxt.setToken(data.idToken);
localStorage.setItem('id',data.idToken);
setIsLoader(false);
    cxt.setIsLogin((prevState) => !prevState);
    // cxt.setProfilePage(true);
  });
}

}
catch(error){
   setIsAlert(true);
   setIsLoader(false);
}
}
  return (
    <>
   <section>
    {isAlert && alert('Auhtentication failed')}
      <h1>Login </h1>
    <form onSubmit={submitlogindetail}>
        <div>
          <label htmlFor='email'>Your Email</label>
          <input type='email' ref={email} id='email' required />
        </div>
        <div>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={password}
            required
          />
        </div>
        <div>
{!isLoader && <button >Login</button>}
        
        </div>
        {isLoader && <p>sending request...</p>}
      </form></section>
   </>
  );
};



export default Login