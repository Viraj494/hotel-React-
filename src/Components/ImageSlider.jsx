import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade , Zoom, Slide } from 'react-slideshow-image';


const slideImages = [
    {
        url : 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=',
        Title : 'Shangri-La Colombo',
        caption : 'first slide'
    },
    {
        url : 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Title : 'Points on Plates',
        caption : 'second slide'
    },
    {
        url : 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Title : 'Rooms & Suits',
        caption : 'third slide'
    }
];

const divStyle = {
    display :'flex',
    alignItems : 'center',
    justifyContent : 'center',
    height : '550px',
    backgroundSize : 'cover'
}

const titleStyle = {
    fontSize : '40px',
    color : 'white'
}

const spanStyle = {
    fontSize : '25px',
    color : 'white',
    display : 'block',
}

export const ImageSlider = () => {
  return (
    <div className='slide-container'>
        
        <Fade>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage : `url(${image.url})`}}>
                        <h1 style={titleStyle}>{image.Title}</h1>
                        {/*<span style={spanStyle}>{image.caption}</span>*/}
                        
                    </div>
                </div>
            ))}
        </Fade>

    </div>
  )
}
