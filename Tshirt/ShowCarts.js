import React from 'react'
import Modal from 'react-bootstrap/Modal';
import CartItems from './CartItems';
import { useCartContext } from '../store/CartContext';

const ShowCarts = () => {
    const cxt=useCartContext();
    console.log(cxt.openModal);
const handleClose=()=>{
    cxt.setOpenModal(false);
}
  return (
    
 <Modal show={cxt.openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<CartItems/>
</Modal.Body>
      </Modal>

  )
}

export default ShowCarts