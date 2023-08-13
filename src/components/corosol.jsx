import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import video1 from "./video1.mp4";
import coro1 from './coro1.jpg';
import coro2 from './coro2.jpg';
import coro3 from './coro3.jpg';
import coro4 from './coro4.jpg';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{ width:"1250px", height: "500px"}}
        
        //   className="w-50"
          src={coro1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px", color: 'white'}}>Business Intelligence</h5>
          <p style={{ fontsize:"20px", color: 'white'}}>Informed Intelligence on demand, Anywhere, Everywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width:"1250px", height: "500px"}}
        //   className="w-20"
          src={coro2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px", color: 'white'}}>Predictive Analytics</h5>
          <p style={{ fontsize:"20px", color: 'white'}}>GSTS offers prophecy, our flagship product for Predictive Analytics.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width:"1250px", height: "500px"}}
        //   className="w-20"
          src={coro3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px", color: 'white'}}>Modernization</h5>
          <p style={{ fontsize:"20px", color: 'white'}}>
            Evolve, Innovate and dominate your market.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width:"1250px", height: "500px"}}
        //   className="w-20"
          src={coro4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px", color: 'white'}}>Manage Services</h5>
          <p style={{ fontsize:"20px", color: 'white'}}>Leave the heavy lifting to us.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;