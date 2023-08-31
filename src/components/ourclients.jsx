import React from "react";
import mos from './mos.jpg';
import black from './black.jpg';
import smart from './smart.jpg';
import unnati from './unnati.jpg';
import smile from './smile.jpg';
import grupo from './grupo.jpg';
import wilson from './wilson.jpg';

function Ourclients() {
    return(
<>
<div>
<h3 style={{ fontSize: "40px", color: "#6ec1e4", fontWeight:'bold'}}>Our Clients</h3>
<h5 style={{color:'black', opacity:'0.3'}}>Driving technology for leading brands</h5><br/>
<img style={{height:'150px', width:'150px', marginRight:'100px'}} src={mos} />
<img style={{height:'150px', width:'200px',marginRight:'150px'}} src={black} />
<img style={{height:'150px', width:'200px',marginRight:'200px'}} src={smart} />
<img style={{height:'150px', width:'250px'}} src={unnati} /><br/><br/><br/>
<img style={{height:'150px', width:'150px', marginRight:'250px'}} src={smile} />
<img style={{height:'150px', width:'150px', marginRight:'200px'}} src={grupo} />
<img style={{height:'150px', width:'150px'}} src={wilson} />
</div>
</>
);
}
export default Ourclients;