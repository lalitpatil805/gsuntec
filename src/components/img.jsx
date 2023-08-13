import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';
import analysis from './analysis.jpg';
import software from './software.jpg';
import modernisation from './modernisation.jpg';
import manage from './manage.jpg';
import './style.css';

function ShapeExample() {
  return (
    
    <Container>
      
      <Row>
        
        <Col xs={6} md={3}>
        
          <figure className="image">
<img style={{width: "105%", height: "100%"}} src={analysis}/>
<figcaption style={{color:"white"}}><span style= {{fontWeight: "bold"}}>Analytics</span><br/>Turn raw data into valuable insights.</figcaption>
</figure>
        </Col>
      
        <Col xs={6} md={3}>
        <figure className="image">
<img style={{width: "105%", height: "100%"}} src={software}/>
<figcaption style={{color:"white"}}><span style= {{fontWeight: "bold"}}>Software Engineering</span><br/>Rock-solid solutions for a changing<br/>world.</figcaption>
</figure>
        </Col>
        
        <Col xs={6} md={3}>
        <figure className="image">
<img style={{width: "105%", height: "100%"}} src={modernisation}/>
<figcaption style={{color:"white"}}><span style= {{fontWeight: "bold"}}>Modernisation</span><br/>Evolve, innovate and dominate your<br/>market</figcaption>
</figure>
        </Col>
        
        <Col xs={6} md={3}>
        <figure className="image">
<img style={{width: "105%", height: "100%"}} src={manage}/>
<figcaption style={{color:"white", marginLeft: "40px"}}><span style= {{fontWeight: "bold"}}>Manage-services</span><br/>Leave the heavy lifting to us</figcaption>
</figure>
        </Col>
    
      </Row>
      </Container>
    
  );
}

export default ShapeExample;