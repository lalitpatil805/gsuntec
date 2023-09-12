import React from 'react';
import Mobilesolutionn from './mobilesolutionn.jpg';

function Mobilesolution() {
  return (
    <>
    <div style={{color:'#03AEF6', fontSize:'35px',fontWeight:'bold'}}>Mobile Solutions</div><br/>

    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
    <h3 className='page' style={{marginLeft:'630px',position:'relative',animationName:'page',animationDuration:'2s'}}>Mobile applications</h3><br/>
    <div className='Next'><img style={{height:'400px', width:'450px', marginRight:'630px',marginTop:'-50px',position:'relative',animationName:'Next',animationDuration:'2s'}} src={Mobilesolutionn}  /></div>
    <div className='page'><p style={{marginTop:'-330px', marginLeft:'680px',textAlign:'left',lineHeight:'30px',position:'relative',animationName:'page',animationDuration:'2s'}}>Developing and deploying effective mobility solutions using innovative web, mobile<br/> and cloud technologies. Enterprises today are chasing the mobile gold rush without<br/> completely understanding the subtle differences between mobile and mobility. While<br/> mobile includes making everything compatible for a device, mobility on the other hand<br/> means optimizing the lives of your customers. It is essential that businesses understand<br/> where their customers are, what their culture is, and what their goals are, etc. These<br/> insights become the fundamentals of a good mobility solution.</p></div>
    </div>

    </>
  );
}
export default Mobilesolution;