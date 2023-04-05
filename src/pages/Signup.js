 import React,{useState,useRef} from 'react'
import './Login.css'
import { useStateContext } from '../store/StateContext';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

const Signup = () => {
 
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
const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTZc5ve0hppsi9GRY6iPt-YcVw-pQNi4s',{
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
console.log('Sign in successfully');

setIsLoader(false);
    cxt.setSignup((prevState) => !prevState);
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
    <Header/>
   <section className="form-style-6" >
    {isAlert && alert('Auhtentication failed')}
      <h1>Sign In</h1>
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
{!isLoader && <button type='submit'>Sign In</button>}
        
        </div>
        {isLoader && <p>sending request...</p>}
      </form>
      </section>
       {/* <NavLink to="/SignUp" style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})}>Create an Account</NavLink> */}
   </>
  );
};



export default Signup