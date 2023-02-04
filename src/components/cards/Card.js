import React from 'react'
import "./Cards.css"
const Card = ({data}) => {
    console.log(data.show)
  return (
    <div className='card_conatainer'>
            <div className='nameDiv'>
                <h3>{data?.show?.name}</h3>
            </div>
            <img src={data?.show?.image?.original?data?.show?.image?.original : "https://static.tvmaze.com/uploads/images/medium_portrait/40/101115.jpg"} alt="img" />

    </div>
  )
}

export default Card