import React from "react";
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';

function Ourproduct() {
    return(
<>
<div>
<h3 style={{fontSize: "40px", color: "#6ec1e4", fontWeight:'bold'}}>Our Products</h3><br/>

<div style={{display: 'flex', flexDirection: 'row'}}>
    <figure className="ourproduct"><img style={{height:'250px', width:'450px', marginLeft:'10px'}} src={pic1} alt="pic1" /></figure>
    <figure className="ourproduct"><img style={{height:'250px', width:'450px', marginLeft:'70px'}} src={pic2} alt="pic2" /></figure>
    <figure className="ourproduct"><img style={{height:'250px', width:'450px',marginLeft:'60px'}} src={pic3} alt="pic3" /></figure>
</div><br/>
<p style={{marginRight:'1050px',marginTop:'-20px'}}>
    <b>Yard & Terminal Management: </b>
    Terminal operations are highly demanding and competitive in today's world. As highly expensive equipments and infrastructure is required to manage the Terminal operations, cost and labor cost is very high. Our product give detailed view of operations across the terminal to save the time and cost of the operations including cargo arrivals and departure time management, container yard management, queue / straddle crane management.
</p>
<p style={{marginLeft:'3px', marginTop:'-210px'}}>
    <b>eFile Management: </b>
    Go Paperless. Organize , track and manage<br/> file and documents digitally with enterprise security system. Our<br/> Product offers - Automated movement of files and correspon-<br/>dences throughout the lifecycle—from creation to archival. <br/>Unified process across departments and agencies for quick<br/> file management.
</p>
<p style={{marginLeft:'1050px', marginTop:'-160px'}}>
    <b>Toll Plaza Management: </b>
    TPMS is AI system which helps to monitor the vehicles and collect information from live streaming in real time. Each and very vehicle passing through the gates has been captured and in/out timing with images and videos been captured with daily fees collection. Our systems has 95% above accuracy in capturing the details.
</p>
</div>
</>
);
}
export default Ourproduct;