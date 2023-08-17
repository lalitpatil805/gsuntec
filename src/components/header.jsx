import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.jpg';

function Navbar1() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand style={{ marginRight: "30%", fontSize: "25px", fontWeight: "bold" }}><img style={{ height: "40%", width: "40%" }} src={logo} alt="" /><span style={{color: "aqua", fontWeight: "bold", fontSize: "30px" }}>Global Suntec</span> Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "50%" }}>
                    <Nav className="me-auto">
                        <NavDropdown title="HOME" id="basic-nav-dropdown" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>
                            <NavDropdown.Item href="#action/3.1" style={{ color: "blue" }}>OUR PRODUCT</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>LINK</Nav.Link>
                        <Nav.Link href="#link" style={{ marginRight: "10px", color: "black", display: "inline-grid", fontWeight:'bold' }}>WHY US</Nav.Link>

<NavDropdown title="SERVICE" id="basic-nav-dropdown" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>
    <NavDropdown.Item href="#action/3.1" style={{ color: "blue" }}>MOBILE SOLUTION</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2" style={{ color: "blue" }}>BUSINESS INTELLIGENCE</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3" style={{ color: "blue" }}>TESTING</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.4" style={{ color: "blue" }}>ENTERPRICE SOLUTIONS</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.5" style={{ color: "blue" }}>DATA SCIENCE</NavDropdown.Item>

</NavDropdown>
<Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}><span>Bulk SMS</span></Nav.Link>
<Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>CAREER</Nav.Link>
<Nav.Link href="#link" style={{ marginRight: "10px", color: "black", fontWeight:'bold' }}>CONTACT</Nav.Link>
</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navbar1;