import React from 'react'
import Button from 'react-bootstrap/Button';


const Product = (props) => {
  return (
        <tbody>
        <tr>
          <td>{props.i.title}</td>
          <td>{props.i.price}</td>
          {/* <td>{props.quantity}</td> */}
          <td><Button variant='danger'>Remove</Button></td>
        </tr>
        </tbody>
  )
}

export default Product