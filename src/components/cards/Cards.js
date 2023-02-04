import React from 'react'
import Card from './Card'
import "./Cards.css"
const Cards = ({data}) => {
    // console.log(data)
  return (
    <div className='outer_container'>
        {data.map(val=><Card data={val}/>)}
        
    </div>
  )
}

export default Cards