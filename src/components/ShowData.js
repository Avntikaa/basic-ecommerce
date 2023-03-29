import React from 'react'
import EachData from './EachData';


const ShowData = (props) => {

    const productsArr = [{

title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
quantity:0
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
quantity:0},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
quantity:0
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
quantity:0
}
]


  return (
    <div>
        <h2>The Music</h2>
        {
        productsArr.map((i)=>{
            return (
                <EachData i={i}/>
            )
        })
    }
        </div>
  )

}
export default ShowData