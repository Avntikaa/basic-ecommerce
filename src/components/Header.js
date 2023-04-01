import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useStateContext } from '../store/StateContext';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const cxt=useStateContext();
  console.log(cxt.email);
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="justify-content-center bg-dark text-white fs-5"
    >
<Nav.Item className='mx-5'>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink to="/Store">Store</NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink to="/About">About</NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink to="/Login">Login</NavLink>
      </Nav.Item>
       <Nav.Item className='mx-5'>
        <NavLink to="/Contact">Contact</NavLink>
      </Nav.Item>
      <h1>{cxt.email}</h1>
<button className='mx-5 float-right' onClick={cxt.ShowCart}>Cart {cxt.update}</button>
 <CartItem />
</Nav>  
)
}

export default Header
