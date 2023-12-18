import React from 'react'
import '../Styles/Experience.css'
import ExperienceCard from './ExperienceCrad';

export const Experience = () => {

  const cardData = [
    {
      title: 'Multiply Your Points',
      imageUrl: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      title: 'Get Away & Save More',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/02/04/15/38/galle-4818532_1280.jpg',
    },

    {
      title: 'Earns Upto 130K Points',
      imageUrl: 'https://cdn.pixabay.com/photo/2013/03/02/01/25/american-express-89024_1280.jpg',
    },

    {
      title: 'A Night On Us',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/02/27/18/05/pool-4885450_1280.jpg',
    },

    {
      title: '3 Nights Under $250',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/03/09/20/56/zanzibar-2130811_1280.jpg',
    },

    {
      title: 'Earn Upto 3X points On Every Stay',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/02/25/19/57/rest-649351_1280.jpg',
    }
  ];

  return (
    <div>
      <div className="experience-title">
        <h1>Experience Something New</h1>
        <p>Embrace the spirit of the season. Discover our recommendations for winter wonderland getaways or craft your own enchanting escape. Embrace the joy of staying and create unforgettable holiday memories.</p>
      </div><br />

      <div className="experience-cards-container">
        {cardData.map((card, index) => (
          <ExperienceCard key={index} {...card} />
        ))}
      </div>

    </div>
  )
}
