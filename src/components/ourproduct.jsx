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
    <img style={{height:'250px', width:'450px', marginLeft:'10px'}} src={pic1} alt="pic1" />
    <img style={{height:'250px', width:'450px', marginLeft:'10px'}} src={pic2} alt="pic2" />
    <img style={{height:'250px', width:'450px',marginLeft:''}} src={pic3} alt="pic3" />

</div>
</div>
</>
);
}
export default Ourproduct;