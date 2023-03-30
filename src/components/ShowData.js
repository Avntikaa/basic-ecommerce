import React from 'react'
import { useStateContext } from '../store/StateContext';
import EachData from './EachData';


const ShowData = (props) => {

  const cxt=useStateContext();


  return (
    <div>
        <h2>The Music</h2>
        {
        cxt.productsArr.map((i)=>{
            return (
                <EachData i={i} id={i.id}/>
            )
        })
    }
        </div>
  )

}
export default ShowData