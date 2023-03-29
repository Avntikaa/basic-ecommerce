import React from 'react'
import Modal from 'react-bootstrap/Modal';
import EachCartItem from './EachCartItem';
import { useStateContext } from '../store/StateContext';

const CartItem = (props) => {
      const cxt=useStateContext();
const handleClose=()=>{
    cxt.setOpenModal(false);
}



  return (
  <Modal show={cxt.openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<EachCartItem item={cxt.cartElements} />
    </Modal.Body>
      </Modal>
 
  )
}

export default CartItem
