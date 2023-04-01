import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Product from './Product';

const EachCartItem = (props) => {
  console.log(props.item);
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
    props.item.map((i)=>{
return <Product i={i} />
    })
}
        
        </Table>
        <h3>Total  $ 0.00</h3>
        <Button variant='primary'>Purchase</Button>
        </>
      )
}

export default EachCartItem