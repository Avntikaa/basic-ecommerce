import React from 'react'
import Button from 'react-bootstrap/Button';
import { useStateContext } from '../store/StateContext';
import { MdDelete} from "react-icons/md";

const TshirtProduct = (props) => {
const cxt=useStateContext();
  return (
        <tbody style={{backgroundColor:'white'}}>
        <tr>
          <td>{props.i.title}</td>
          <td>{props.i.price}</td>
          <td>{props.i.quantity}</td>
          <td><Button variant='outlined' size="large" onClick={()=>cxt.incrementqty(props.i)} >+</Button></td>
                    <td><Button  onClick={()=>{cxt.decrementqty(props.i)}} 
                    sx={{
        "&.Mui-disabled": {
          background: "#eaeaea",
          color: "#c0c0c0"
        }
      }}>-</Button></td>

          <td>
           <button style={{border:'none'}}><span style={{fontSize:"30px",color:'red'}}  onClick={()=>cxt.removeitemfromcart(props.i)}><MdDelete/></span>
       </button>
        
       </td>
        </tr>
        </tbody>
  )
}

export default TshirtProduct