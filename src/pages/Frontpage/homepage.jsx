import React from 'react'
import './homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './imghome1.jpg';
import image2 from './imghome2.jpg';
import image3 from './imghome3.jpg';
import image4 from './imghome4.jpg';

export default function Homepage () {
  return (
     <div >
     <hr className="horizontal-line"  />
     
     <div className='divCarousel'style={{padding:'0px 0px'}}> 
     <Carousel>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ height: '545px' }}
         
       
        />
        <Carousel.Caption>
          <h3 className='crslCap1'>Federation of Youth Club Mulatiyana</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ height: '545px' }}
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
          style={{ height: '545px' }}
          

        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* About Us part */}
     </div >
     <table style={{marginLeft:'200px',marginRight:'200px'}} >
     <tr>
     <th colspan="2" style={{marginLeft:'100px'}}>About us</th> 
    
     </tr>
     <tr><td>
     <img
      src={image4}
      alt="About Us Image"
      style={{  marginTop:'5px', width: '400px', height: '300px' }}
    
    /> 
    
      </td>
        <td style={{padding:'100px',marginTop:'0px'}}> We are London Youth: a charity on a mission to support the capital’s youth sector 
      to improve the lives of young people. We do this with and through our members – a network 
      of 600 youth organisations – and
      at our two outdoor residential centres, Hindleap Warren and Woodrow High House.</td>
      </tr>
      
     </table>
     {/* What we have part */}
     <div>
        
     </div>
    </div>
  )
}

 
