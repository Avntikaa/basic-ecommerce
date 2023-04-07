import React from 'react'
import Form from '../Tshirt/Form';
import ShowTshirt from '../Tshirt/ShowTshirt';
import { StateContext } from '../Tshirt/StateContext';
import Cart from '../Tshirt/Cart';
const Tshirt = () => {
  return (
    <>
   <Cart/>
   <Form/>
<ShowTshirt/>  
</>)
}

export default Tshirt