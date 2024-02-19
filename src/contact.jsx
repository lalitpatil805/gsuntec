import React from 'react';
import Header from './components/header';
import { FaPhoneAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import Footer from './components/footer';
function Contact() {
  return (
    <>
    <Header/><br/><br/>

    <div className='Contact' style={{display:'flex', flexDirection:'row'}}>
    <h4 style={{color:'#2785d9',marginLeft:'100px',fontsize: '10px',fontweight: '500',texttransform: 'uppercase',wordspacing: '10px',display: 'inline-block',webkittransform: 'rotate(-90deg)',transform: 'rotate(-90deg)',position: 'relative',top: '20px'}}>CONTACT US</h4>
    <h4 style={{ color: '#000000',marginRight:'80px',fontsize: '10px',fontweight: '500',lineheight: '4.1em'}}> Connect<br/> <br/> with us </h4>
    <i style={{fontSize:'40px',color:'#23A455',marginLeft:'90px',marginTop:'10px'}}><FaPhoneAlt /></i>
    <p style={{marginLeft:'30px',marginTop:'20px',fontweight:'300'}}>"+91-9028315486"<br/>"+91-9511877603"</p>
    <i style={{fontSize:'50px',color:'#23A455',marginLeft:'120px',marginTop:'-7px'}}><FaIdCard /></i>
    <p style={{marginLeft:'20px',marginTop:'20px',fontweight:'300'}}>info@gsuntec.com</p>
    <u></u>
    </div><br/><br/><br/>

    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>

    <div>
    <h3>PUNE</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'50px'}}>Global Suntec Solutions Pvt. Ltd<br/>
      E6, Laxmipuram,<br/>
      Infront Of Commerce Zone IT Park<br/>
      Pune 411006 MH, INDIA<br/>
      +91-9028315486</p>
    </div>

    <div>
    <h3>NAGPUR</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'40px'}}>Global Suntec Solutions Pvt. Ltd.<br/>
31, Madhuban,<br/>
Harpur Nagar,<br/>
Nagpur 440009 MH, INDIA<br/>
+91-95118 77603</p> 
    </div>

    <div>
    <h3>SINGAPORE</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'40px'}}>Global Suntec Solutions Pvt. Ltd.<br/>
#16-681,22 Havelock road, <br/>
Tiong Bahru<br/>
Singapore 160022<br/>
+65-86229070</p> 
 </div>

    </div>

    <Footer/>
    </>
  )
}

export default Contact;