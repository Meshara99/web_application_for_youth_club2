import React from 'react'
import './homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './imghome1.jpg';
import image2 from './imghome2.jpg';
import image3 from './imghome3.jpg';

export default function Homepage () {
  return (
    <div>
   
     <div className='divCarousel'style={{padding:'20px 80px'}}>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        //  style={{ height: '500px'}}
        />
        <Carousel.Caption>
          <h3 className='textH3'>Federation of Youth Club Mulatiyana</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
    </div>
  )
}

 
