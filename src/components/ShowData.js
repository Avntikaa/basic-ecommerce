import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


const ShowData = () => {
    const productsArr = [{

title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
}
]

  return (
    <div>
        <h2>The Music</h2>
        {
        productsArr.map((i)=>{
            return (
                <Row>
                  <Col>
            <h1>{i.title}</h1>
            <img src={i.imageUrl} alt='img'/>
            <div className='justify-content-md-around  mt-3'>
<span className='mx-5'>$ {i.price}</span>
        <Button variant="primary" size="sm">
          Large button
        </Button>
        </div>
        </Col>
            </Row>
            )
        })
    }
        </div>
  )

}
export default ShowData