import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.jpg';
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link,  
}   
from 'react-router-dom';  
import Mobilesolution from './mobilesolution';
import Ourproduct from './Ourproduct';
import Businessintelligence from './Businessintelligence';
import Testing from './Testing';
import Enterprisesolution from './Enterprisesolution';
 function Navbar1() {
     return (
        
            <div>
         <Navbar expand="lg" >
             <Container style={{margin:'0px', padding:'0px', marginLeft:'70px'}}>
                 <Navbar.Brand style={{ marginRight: "30%", fontSize: "25px", fontWeight: "bold" }}><img style={{ height: "40%", width: "40%" }} src={logo} alt="" /><span style={{color: "aqua", fontWeight: "bold", fontSize: "30px" }}>Global Suntec</span> Solutions</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "50%" }}>
                     <Nav className="me-auto">
                         <NavDropdown title="HOME" id="basic-nav-dropdown" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>
                             <NavDropdown.Item as={Link} to="src/components/ourproducts" style={{ color: "blue" }}>OUR PRODUCTS</NavDropdown.Item>
                         </NavDropdown>
                         <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>LINK</Nav.Link>
                         <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", display: "inline-grid", fontWeight:'bold' }}>WHY US</Nav.Link>

 <NavDropdown title="SERVICE" id="basic-nav-dropdown" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>
     <NavDropdown.Item as={Link} to="/MobileSolution" style={{ color: "blue" }}>MOBILE SOLUTION</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="/BusinessIntelligence" style={{ color: "blue" }}>BUSINESS INTELLIGENCE</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="/Testing" style={{ color: "blue" }}>TESTING</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="/Enterprisesolution" style={{ color: "blue" }}>ENTERPRISE SOLUTIONS</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="/datascience" style={{ color: "blue" }}>DATA SCIENCE</NavDropdown.Item>

 </NavDropdown>
 <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}><span>Bulk SMS</span></Nav.Link>
 <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>CAREER</Nav.Link>
 <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>CONTACT</Nav.Link>
     
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar >
</div>
  );
}
export default Navbar1;