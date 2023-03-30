import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from '../store/StateContext';
import EachData from './EachData';

const ProductDetail = () => {
    const cxt=useStateContext();
const param=useParams();
  return (
    cxt.productsArr.map((i)=>{
        if(i.id==param.id)
           {
            return (
                <>
                <EachData i={i} id={i.id}/>
                <h3>Review</h3>
              <h2>{i.review}</h2>
                </>
            )
           }
        })
  )
}

export default ProductDetail