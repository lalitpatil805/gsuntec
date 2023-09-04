import React from 'react';
import Enterprise from './Enterprise.jpg';

function Enterprisesolution() {
  return (
    <>
    <div style={{color:'#03AEF6', fontSize:'35px',fontWeight:'bold'}}>Enterprise Solutions</div><br/>

    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
    <h3 style={{marginLeft:'640px'}}>Enterprise Management</h3><br/>
    <div><img style={{height:'300px', width:'450px', marginRight:'630px'}} src={Enterprise}  /></div>
    <div><p style={{marginTop:'-280px', marginLeft:'780px',textAlign:'left',lineHeight:'30px'}}>Let us help you to build deeper analytical capabilities into your trade and embrace the future<br/> and restructure your business with Enterprise Business and Mobility Solutions offered by us.<br/> Similarly with our Enterprise Mobility Solutions we mobilize your organisation and help you to<br/> keep your employees productive when they are on move with their favourite apps and devices<br/> while keeping your corporate data protected. With our strategic partnership with ORACLE, SAP, MICROSOFT and others we make a positive difference to our customers by aligning their busi-<br/>ness with the latest Information Technology and enhance value from their investments.</p></div>
    </div>

    </>
  );
}
export default Enterprisesolution;