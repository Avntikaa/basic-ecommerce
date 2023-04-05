import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from '../store/StateContext';
import EachData from './EachData';
import Header from './Header';
import CardDetail from './CardDetail'
const ProductDetail = () => {
    const cxt=useStateContext();
const param=useParams();
 const detailarray = [
        [
            "https://images.bewakoof.com/t1080/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1679641476-1.jpg",
            "https://images.bewakoof.com/t1080/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1679641481-2.jpg",
            "https://images.bewakoof.com/t1080/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1679641497-5.jpg",
            "https://images.bewakoof.com/t1080/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1679641487-3.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048273-1.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048278-2.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048284-3.jpg",
            "https://images.bewakoof.com/t1080/men-s-white-marvel-t-shirt-390747-1679048300-6.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048495-1.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048511-4.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048517-5.jpg",
            "https://images.bewakoof.com/t1080/certified-troublemakers-half-sleeve-t-shirt-tjl-black-287865-1679048500-2.jpg"
        ],
        [
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034778-1.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034784-2.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034800-5.jpg",
            "https://images.bewakoof.com/t1080/men-s-brown-one-punch-man-graphic-printed-oversized-t-shirt-583495-1679034805-6.jpg"
        ]
    ]
  return (
    <>
      <Header/>

    {cxt.productsArr.map((i)=>{
        if(i.id==param.id)
           {
            return (
                <>
                {/* <EachData i={i} id={i.id}/>*/}
                
              <CardDetail i={i} img={detailarray[i.id-1]}/>
                </>
            )
           }
        })}
        </>
  )
}

export default ProductDetail