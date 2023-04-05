import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Product from './Product';
import { useStateContext } from '../store/StateContext';

const EachCartItem = (props) => {
  const cxt=useStateContext();
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
return <Product i={i} />
    })
}
        
        </Table>
        <h3>Total : $ {cxt.price}</h3>
        <Button variant='primary'>Purchase</Button>
       
        </>
      )
}

export default EachCartItem