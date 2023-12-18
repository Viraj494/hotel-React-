import React from 'react';
import OffersCard from '../Components/OffersCard';
import '../Styles/Offers.css'

export const Offers = () => {

    const offers = [
        {
            img:'https://images.pexels.com/photos/7968283/pexels-photo-7968283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Couple Offer',
            price:'25000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        {
            img:'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Family Offer',
            price:'50000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        {
            img:'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Friends Offer',
            price:'75000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        {
            img:'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Family Offer',
            price:'50000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        {
            img:'https://images.pexels.com/photos/7968283/pexels-photo-7968283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Couple Offer',
            price:'25000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        {
            img:'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name:'Friends Offer',
            price:'75000',
            description:'Enjoy a luxurious family getaway in the city with 5-star service.'
        },
        
    ];
    
    
  return (
    <div className="offers">
        <h1 className='offers-title'>Offers</h1><br />
    <div className="offers-list">
            {offers.map((offers, index) => (
                <OffersCard key={index} {...offers} />
      ))}
    </div>
    </div>
  )
}
