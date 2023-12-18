import React, { useState } from 'react';
import '../Styles/Destinations.css'

export const Destinations = () => {

  const [selectedDestination, setSelectedDestination] = useState('Cinnamon Hakuraa Huraa Maldives');

  const destinationOptions = [
    { name: 'Cinnamon Hakuraa Huraa Maldives', description: 'Cinnamon Hakuraa Huraa Maldives with its white roofed Water Bungalows set knee-deep in crystal waters of the lagoon is a vision of the stay promised.', imgurl:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/234177661.jpg?k=4968aca362de5fb1d19b1ec0c2fa04727e4d6d5cf968eac43fd01b0d3bcbddb5&o=&hp=1' },
    { name: 'Habarana Village by Cinnamon', description: 'Experience affordable rustic barefoot type elegance, which is designed to reflect the rural environs and simplicity of the local village life surrounded by rich biodiversity.', imgurl:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0b/a4/94/exteriror-view.jpg?w=1200&h=-1&s=1' },
    { name: 'Cinnamon Velifushi Maldives', description: 'Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.', imgurl:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/218936185.jpg?k=abf38d013626542bb13b3b154bf3254609f0c72e6b65a9f7ab107cf566cab24f&o=&hp=1' },
    { name: 'Cinnamon Dhonveli Maldives', description: 'Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.', imgurl:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/267626704.jpg?k=b1a0ec50f03bbac6cb1242d87c0ae47b5b4aa7e9a6f1074879e28cd4ea56517b&o=&hp=1' },
    { name: 'Ellaidhoo Maldives by Cinnamon', description: 'Dive into the most candid experience with the ocean at our house reef with an awe-inspiring diversity of underwater life.', imgurl:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/172380176.jpg?k=6f0feb6d7c6b8cbd05ef002677807195c958cc2c3367a397269b50bb0b1ca660&o=&hp=1'},
  ];

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
  };

  return (
    <div className='container'>

      <h1 className='page-title'>Our Destinations</h1><br />
      
      <select id="destination" onChange={handleDestinationChange} value={selectedDestination}>
        {destinationOptions.map((option) => (
          <option key={option.name} value={option.name} className='destination'>
            {option.name}
          </option>
        ))}
      </select>

      {selectedDestination && (
        <div className='card'>
          <img src={destinationOptions.find(option => option.name === selectedDestination)?.imgurl} alt="Card Image"/>
          
          <div className="card-text">
            <h3>{selectedDestination}</h3><br/> <br/>
            <p>{destinationOptions.find(option => option.name === selectedDestination)?.description}</p>
            <button>Discover More</button>
          </div>
        </div>
      )}
    </div>
  );
};
