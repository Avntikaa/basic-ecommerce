import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useStateContext } from '../store/StateContext';
import CartItem from './CartItem';

const Header = () => {
  const cxt=useStateContext();
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="justify-content-center bg-dark text-white fs-5"
    >
<Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">About</Nav.Link>
      </Nav.Item>
<button className='mx-5 float-right' onClick={cxt.ShowCart}>Cart 0</button>
 <CartItem/>
</Nav>  
)
}

export default Header
