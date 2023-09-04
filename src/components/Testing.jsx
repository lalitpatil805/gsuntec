import React from 'react';
import Testingpic from './Testingpic.jpg';

function Testing() {
  return (
    <>
    <div style={{color:'#03AEF6', fontSize:'35px',fontWeight:'bold'}}>Testing</div><br/>

    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
    <h3 style={{marginLeft:'580px'}}>Testing</h3><br/>
    <div><img style={{height:'300px', width:'450px', marginRight:'630px'}} src={Testingpic}  /></div>
    <div><p style={{marginTop:'-280px', marginLeft:'700px',textAlign:'left',lineHeight:'30px'}}>Quality Assurance is imperative to the success of every business today which is why more<br/> and more enterprises are employing the Testing Services. The systems are turning more<br/> complex and it has become a necessity for an enterprise to look for the best solutions-<br/> that provide high quality applications. It’s advised to take the help of professional servi-<br/>ces offering best quality testing services spanning across consulting, functional, automa-<br/>tion, performance and specialized testing.</p></div>
    </div>

    </>
  );
}
export default Testing;