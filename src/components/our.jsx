import React from "react";
import {BsFillRocketTakeoffFill } from "react-icons/bs";
import {FaEye,FaPencilAlt} from "react-icons/fa";
function Our() {
    return(
<>
<div className="our">
<h3 style={{ fontSize: "40px", color: "blue"}}>Our</h3><br/>

<div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', flexWrap:'wrap'}}>

<div>
    <BsFillRocketTakeoffFill size={"50px"} style={{marginLeft:'0px'}}/><br/><br/>
    <h3 style={{fontSize:'18px', color:'blue', textDecorationLine:'underline', textDecorationThickness:'5px', textUnderlineOffset:'6px'}}>Vision</h3><br/>
    <p style={{marginLeft:'30px'}}>To Be A Trusted Partner Of Our Customers And <br/>
    Employees, Through Innovation & Technology Excellence <br/>
    And To Act As A Socially Responsible organization.</p>
</div>

<div> 
   <FaEye size={"50px"} style={{marginLeft:'10px'}}/><br/><br/>
   <h3 style={{marginLeft:'10px',fontSize:'18px', color:'blue', textDecorationLine:'underline', textDecorationThickness:'5px', textUnderlineOffset:'6px'}}>Mission</h3><br/>
   <p style={{marginRight:'20px'}}>To Seek Sustained And Aggressive Growth As A Niche<br/>
   Software Solution Provider. We Shall Endeavor To Delight<br/>
   Our Customers Through Innovative And Cost Effective <br/>
   Solutions.</p>
</div>
    
<div>
    <FaPencilAlt size={"50px"} style={{marginRight:'50px'}}/><br/><br/>
    <h3 style={{marginRight:'50px',fontSize:'18px', color:'blue',textDecorationLine:'underline', textDecorationThickness:'5px', textUnderlineOffset:'6px'}}>Passion</h3><br/>
    <p style={{marginRight:'50px'}}>To Expand Business Reach, Improve Sales Conversion And <br/>
    Have Enduring Client Relationships By Harnessing Cutting <br/>
    Edge Technology And Leveraging Our key Technology <br/>
    Partnerships.</p>
</div>

</div>
</div>
</>
);
}
export default Our;