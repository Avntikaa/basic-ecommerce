import React from 'react'
import Modal from 'react-bootstrap/Modal';
import EachCartItem from './EachCartItem';
import { useStateContext } from '../store/StateContext';

const CartItem = () => {
      const cxt=useStateContext();
const cartElements = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

}

]

  return (
  <Modal show={cxt.openModal}>
        <Modal.Header closeButton>
          <Modal.Title>CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<EachCartItem item={cartElements}/>
    </Modal.Body>
      </Modal>
 
  )
}

export default CartItem
