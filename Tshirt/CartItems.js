import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../store/CartContext';
import TshirtProduct from './TshirtProduct';
const CartItems = () => {
    const cxt=useCartContext();
console.log(cxt.cartItems);
  return (
    <>
<Table striped bordered hover size="sm" borderless>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
              </thead>  
{
    cxt.cartElements.map((i)=>{
return <TshirtProduct i={i}/>
    })
}
        
        </Table>
        <h3>Total : $ {cxt.price}</h3>
        <Button variant='primary'>Purchase</Button>
       
        </>
      )  
}

export default CartItems