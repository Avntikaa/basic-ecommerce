import React,{useState} from 'react'
import { useStateContext } from '../store/StateContext';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const EachData = (props) => {
      const cxt=useStateContext();
const id=props.id;
        const addtocart=(i)=>{
   const obj={
      title:i.title,
      price:i.price,
      quantity:i.quantity,
    }
cxt.AddtoCart(obj);
}

  return (
        <span>
    <Link to={`/Store/${id}`}>
            <h1>{props.i.title}</h1>
            <img src={props.i.imageUrl} alt='img'/>
            <div className='justify-content-md-around  mt-3'>
<span className='mx-5'>$ {props.i.price}</span>
        <Button variant="primary" size="sm" onClick={()=>addtocart(props.i)}>
Add to Cart        </Button>
        </div>

            </Link>
            </span>
            )
}

export default EachData