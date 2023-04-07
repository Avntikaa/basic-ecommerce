import React from 'react'
import { BsCart } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import ShowCarts from './ShowCarts';
import { useCartContext } from '../store/CartContext';

const Cart = () => {
    const cxt=useCartContext();
    function ShowCart(){
      cxt.ShowCart();
    }
  return (
    <>
  <Button type="button" class="btn btnmx-3 bg dark" onClick={ShowCart}><span class="bi bi-cart"><BsCart/></span> <span>{cxt.update}</span> </Button> 
  <ShowCarts/>
  </>
  )
}

export default Cart
