import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useStateContext } from '../store/StateContext';

const CardDetail = (props) => {
  const cxt=useStateContext();
    const imgs=props.img;

 const addtocart=(i)=>{
   const obj={
      title:i.title,
      price:i.price,
      quantity:i.quantity,
    }
cxt.AddtoCart(obj);
}

  return (
    <>
    <Card style={{ width: '60rem' ,height:'30rem',marginLeft:"200px",float:'left',marginTop:'20px'}}>
<Carousel style={{ width: '380px' }}>
      {imgs.map((i)=>{
        return (
          <Carousel.Item>
        <img
          className="d-block w-100"
          src={i}
          alt="First slide"
        />
      </Carousel.Item>
        )
      })}
    </Carousel>
     
 <div style={{ width: '30rem',marginTop:"-450px",marginLeft:'28rem'}}>
 
        <h3>{props.i.title}</h3>
        <Card.Text>
          {
            [...Array(props.i.review)].map((star) => {        
        return (         
          <span className="star">&#9733;</span>        
        );
      })
          }
        </Card.Text>
                <Card.Text style={{fontWeight:"bold",fontSize:"30px"}}>Rs {props.i.price}</Card.Text>

        <Button variant="primary" onClick={()=>addtocart(props.i)}>Add to Cart</Button>
    </div>
    </Card>
    </>
  )
}

export default CardDetail