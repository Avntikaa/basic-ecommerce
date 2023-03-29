import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const EachCartItem = (props) => {
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
return (<tbody>
        <tr>
          <td>{i.title}</td>
          <td>{i.price}</td>
          <td>{i.quantity}</td>
          <td><Button variant='danger'>Remove</Button></td>
        </tr>
        </tbody>)
    })
}
        
        </Table>
        <h3>Total  $ 0.00</h3>
        <Button variant='primary'>Purchase</Button>
        </>
      )
}

export default EachCartItem