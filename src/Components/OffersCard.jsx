import React from 'react'
import '../Styles/OffersCard.css'

const OffersCard = ({img, name, price, description}) => {
  return (
    <div className='offers-card'>
        <img src={img} alt="" />
        <p>Rooms & Suits</p>
        <p>15 Dec 2023 - 31 Jan 2024</p><br />
        <p><b>{name}</b></p><br />
        <p>from <b>LKR {price}</b> Average per Night</p>

        <button className='offers-btn'>View Details</button>
    </div>
  )
}

export default OffersCard;
