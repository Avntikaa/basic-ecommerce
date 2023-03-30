import React,{useState} from 'react'
import './Contact.css'
import { useStateContext } from '../store/StateContext';
import Header from '../components/Header';
const Contact = () => {
 const cxt=useStateContext();
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const addname=(e)=>{
        setname(e.target.value);
    }
    const addPrice=(e)=>{
        setemail(e.target.value);
    }
    const addphone=(e)=>{
        setphone(e.target.value);
    }

    const onSubmitFormDeatils=(e)=>{
        console.log('kfnkj');
        e.preventDefault();
        const newuser={
            name:name,
            email:email,
            phone:phone
        }
try{
fetch('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/product.json',{
    method:'POST',
    body:JSON.stringify(newuser)
})
console.log('post success');
}
catch(error){
    console.log(error);
}
   }

    
  return (
<>
<Header/>
<div className="form-style-6" id='formdiv'>
    <h1>Contact us</h1>
<form>
<input type="text"  onChange={addname} placeholder="Enter Name" />
<input type="email" onChange={addPrice} placeholder="Enter Email id" />
<input type="number"  onChange={addphone} placeholder="Enter Phone no" />

<button  type="submit" onClick={onSubmitFormDeatils}>SUBMIT</button>

</form>
</div>
</>
  )
  }

export default Contact
