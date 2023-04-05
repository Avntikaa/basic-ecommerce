import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart } from "react-icons/bs";
import { Button } from 'react-bootstrap';

import { useStateContext } from '../store/StateContext';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const cxt=useStateContext();
  return (
    <div style={{height:"80px",borderBottom:"1px solid lightgrey"}}>
    <Navbar
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="justify-content-center bg-white text-black fs-5 h-100 me-auto my-2 my-lg-0" 
    >
    <span style={{fontSize:"35px",marginLeft:"-120px",marginRight:"80px"}}>Ecommerce</span>

<Nav.Item className='mx-5'>
        <NavLink to="/" style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})}>Home</NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})} to="/Store" >Store</NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5' >
        <NavLink to="/About" style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})}>About</NavLink>
      </Nav.Item>  
       <Nav.Item className='mx-5'>
        <NavLink to="/Contact" style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})}>Contact</NavLink>
      </Nav.Item>
       <Nav.Item className='mx-5'>
        {!cxt.isLogin && <NavLink to="/Login" style={({ isActive }) => 
                      (isActive ? {color: 'blue',fontSize:"25px",fontWeight:"bold"} : {color: 'black',textDecoration:'none'})}>Login</NavLink>}
      </Nav.Item>
{cxt.isLogin && <Button type="button" class="btn btnmx-3 bg dark" onClick={cxt.ShowCart}><span class="bi bi-cart"><BsCart/></span> <span>{cxt.update}</span> </Button> }
     {cxt.isLogin && <button className='mx-2 float-right btn btn-primary' onClick={cxt.onlogout}>Log out</button>}

 <CartItem />
</Navbar> 
</div>
)
}

export default Header
