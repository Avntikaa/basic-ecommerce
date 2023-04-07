import React,{useRef} from 'react'
import { useCartContext } from '../store/CartContext';

const Form= () => {
const cxt=useCartContext();
   const title=useRef();
   const price=useRef();
   const desc=useRef();
   const Large=useRef();
      const small=useRef();
   const Medium=useRef();

const quantity=1;
    const onSubmitFormDeatils=(e)=>{
        e.preventDefault();
        const newshirt={
title:title.current.value,
            price:price.current.value,
desc:desc.current.value,
Large:Large.current.value,
Small:small.current.value,
Medium:Medium.current.value,
quantity:quantity
 }
 try{
fetch('https://ecommerce-2f0ac-default-rtdb.firebaseio.com/Tshirt.json',{
    method:'POST',
    body:JSON.stringify(newshirt)
})
cxt.setIsLogin((prev)=>prev+1);
alert('success');
}
catch(error){
    console.log(error);
}
//  cxt.submitdata(newuser);
   }

    
  return (
<>
<div className="form-style-6" id='formdiv'>
    <h1>Add New Product</h1>
<form>
<input type="text"  ref={title} placeholder="Enter product Name" />
<input type="number" ref={price} placeholder="Enter Price" />
    <input type="text"  ref={desc} placeholder='add description'/>
    <label typeof='number'>L</label>
<input type="number" ref={Large}/>
<label typeof='number'>M</label>
<input type="number" ref={Medium}/>
<label typeof='number'>S</label>
<input type="number" ref={small}/>
<button  type="submit" onClick={onSubmitFormDeatils}>SUBMIT</button>

</form>
</div>
</>  
)
}

export default Form