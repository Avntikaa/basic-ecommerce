import React,{useState} from 'react'
import { useStateContext } from '../store/StateContext';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const EachData = (props) => {
      const cxt=useStateContext();

        const [quantity,setQuantity]=useState(0);
        const addtocart=(i)=>{
   const obj={
      title:i.title,
      price:i.price,
      quantity:i.quantity
    }
setQuantity(quantity+1);
cxt.AddtoCart(obj);
}

  return (
<Row>
                  <Col>
            <h1>{props.i.title}</h1>
            <img src={props.i.imageUrl} alt='img'/>
            <div className='justify-content-md-around  mt-3'>
<span className='mx-5'>$ {props.i.price}</span>
        <Button variant="primary" size="sm" onClick={()=>addtocart(props.i)}>
Add to Cart        </Button>
        </div>
        </Col>
            </Row>  )
}

export default EachData