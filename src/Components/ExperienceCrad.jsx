import React from 'react';
import '../Styles/ExperienceCard.css';

const ExperienceCard = ({ title, imageUrl }) => {
  return (
    <div className="experience-card">
      <img src={imageUrl} alt={title} /><br />
      <h3 className='card-text1'>{title}</h3>
    </div>
  );
};

export default ExperienceCard;
