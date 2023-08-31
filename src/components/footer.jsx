import React from 'react';

function footer() {
  return (
    <>
    <div className='' style={{backgroundColor:'black',opacity:'0.8'}}>
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
        <div style={{margin:'20px'}}>
            <h3 style={{color:'#ffffff', fontWeight:'inherit',margin:'20px'}}>Services</h3>
            <h6 style={{margin:'20px',color:'gray'}}>MOBILE SOLUTIONS</h6>
            <h6 style={{margin:'20px',color:'gray'}}>BUSINESS INTELLIGENCE</h6>
            <h6 style={{margin:'20px',color:'gray'}}>TESTING</h6>
            <h6 style={{margin:'20px',color:'gray'}}>ENTERPRISES SOLUTIONS</h6>
            <h6 style={{margin:'20px',color:'gray'}}>DATA SCIENCE</h6>
        </div>
        <div style={{margin:'20px'}}>
            <h3 style={{color:'#ffffff', fontWeight:'inherit', margin:'20px'}}>Quick Links</h3>
            <h6 style={{margin:'20px',color:'gray'}}>HOME</h6>
            <h6 style={{margin:'20px',color:'gray'}}>SERVICES</h6>
            <h6 style={{margin:'20px',color:'gray'}}>CAREER</h6>
            <h6 style={{margin:'20px',color:'gray'}}>CONTACT</h6>
        </div>
        <div style={{margin:'20px'}}>
            <h3 style={{color:'#ffffff', fontWeight:'inherit',margin:'20px'}}>Our Head Office</h3>
            <h6 style={{margin:'20px',color:'gray'}}>E-6 Laxmipuram, <br/>In front of Commerzone IT Park <br/>Samrat Ashok Marg, Pune-411006, <br/>MH, INDIA</h6>
        </div>
    </div><br/>
    <div>
        <h6 style={{color:'gray'}}>Copyright © 2017 All Rights Reserved By   <span style={{color:'white'}}>Global Suntec Solutions</span>
</h6>
    </div><br/><br/>
    </div>
    </>
  )
}

export default footer;