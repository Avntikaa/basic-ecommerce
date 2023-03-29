import React from 'react'
import { IoLogoYoutube } from 'react-icons/io';
import {FaSpotify,FaFacebookSquare} from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <>
    <Nav className='bg-info justify-content-center h-50 w-100 p-2'>
    
      <Nav.Item>
        <Nav.Link href="/home" className='fs-3 text-white'>The Generic</Nav.Link>
      </Nav.Item>
      <div className='mx-5 mt-3'>
                  <span className='mx-3'><IoLogoYoutube size={20}/></span>
                  <span className='mx-3'><FaSpotify size={20}/></span>
                  <span className='mx-3'><FaFacebookSquare size={20}/></span>
                  </div>
                    </Nav>  
</>
)
}

export default Footer