import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import compimg from './compimg.jpg';

function About() {
    return (
        <>  
            <div>
                <Container>
                    <Row>
                        <Col xs={1}><h4 style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "blue" }}>WHO  WE  ARE</h4></Col>
                        <Col xs={3}><h4 style={{ marginRight: "30%", marginTop: "25%" }}>Know<br /> About us</h4></Col>
                        <Col xs={8} style={{ fontSize: "17px", fontFamily: "Calibri" }}> <p>We Are The Fast Growing Consulting And Outsourcing Software Company. We Have A Team Of Innovative Experienced<br />
                            Professionals Who Think And Act As An Extension To Our Customer’s Development Teams. Our Prime Goal Is To Meet Our
                            Customer’S Expectations By Delivering Smart And Reliable Software Applications To Help Them Grow Their Business. To Do This,
                            We Keep Track Of The Latest Innovations And Trends In Software Development. We Are Continuously Incorporating The Most
                            Efficient Platforms, Programming Languages And Frameworks And We Sharpen Our Technical Skills In Every Project We Work On.
                            Business Challenges – Streamline And Automate Your Business Processes And Overcome Challenges Through Methodology
                            Technology. It Is Our Goal And Driving Ambition To Be The Trusted Partner Of Choice, Delivering Reliable, Complete Floating Production
                            Solutions That Create Value For Our Clients, By Sustainably And Passionately Leveraging The Company’S Technology And Operating Experience.
                            </p></Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <br />
            
                <img style={{ width: "70%" }} src={compimg} alt="" />
            </div >
        </>
    );
}
export default About;