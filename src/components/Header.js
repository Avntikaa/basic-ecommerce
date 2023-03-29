import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
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
<span>Cart 0</span>
</Nav>  
)
}

export default Header
