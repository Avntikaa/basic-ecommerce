import React from 'react'
import { useStateContext } from '../store/StateContext';
import EachData from './EachData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ShowData.css'
import Card from 'react-bootstrap/Card';

const ShowData = (props) => {
const cxt=useStateContext();
const grid = document.getElementById("grid-container");

        const addtocart=(i)=>{
   const obj={
      title:i.title,
      price:i.price,
      quantity:i.quantity,
    }
cxt.AddtoCart(obj);
}


  return (
    <div className='container'>
        {
        cxt.productsArr.map((i)=>{
           
            return (
                    <Card style={{width: '350px' ,height:"400px",margin:"30px 0px 50px 0px"}}> 

                 <div className='box'>
                <Link to={`/Store/${i.id}`}>
            <img src={i.imageUrl} alt='img' style={{ width:'349px' ,height:"300px"}}  />
                </Link>
            <Card.Title>{i.title}</Card.Title>

            <div className='justify-content-md-around  mt-3'>
<span className='mx-5'>$ {i.price}</span>
        <Button variant="primary" size="sm" onClick={()=>addtocart(i)}>Add to Cart</Button>
        </div>
            </div>
        </Card>

            )
        })
        }
        </div>
 
  )

}
export default ShowData