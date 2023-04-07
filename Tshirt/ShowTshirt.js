import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useCartContext } from '../store/CartContext';
const ShowTshirt = () => {
    const cxt=useCartContext();
    const addtoCart=(item,sizeP)=>{
cxt.AddCart(item,sizeP);
    }
  return (
    <div className='container'>
        {
        cxt.productArray && cxt.productArray.map((i)=>{
            return (
                    <Card style={{width: '350px' ,height:"400px",margin:"30px 0px 50px 0px"}}> 

            <Card.Title>{i.title}</Card.Title>
            <Card.Title>{i.desc}</Card.Title>
            <Card.Text>$ {i.price}</Card.Text>
        <Button variant="primary" size="sm" style={{marginTop:'20px'}} onClick={()=>addtoCart(i,'Large')}>L :{i.Large}</Button>
                <Button variant="primary" style={{marginTop:'20px'}} onClick={()=>addtoCart(i,'Medium')} size="sm">M: {i.Medium}</Button>
        <Button variant="primary" style={{marginTop:'20px'}} size="sm" onClick={()=>addtoCart(i,'Small')}>S: {i.Small}</Button>

        </Card>

            )
        })
        }
        </div>
    
  )
}

export default ShowTshirt