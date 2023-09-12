import React from 'react';
import Qlikview from './Qlikview.jpg';
import Tableau from './Tableau.jpg';
import Powerbi from './PowerBI.jpg';
function Businessintelligence() {
  return (
    <>
    <div style={{color:'#03AEF6', fontSize:'35px',fontWeight:'bold'}}>Business Intelligence</div>
  
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
   
   <div className='down' style={{position:'relative',animationName:'down',animationDuration:'2s'}}>
   <img style={{height:'350px', width:'400px', marginLeft:'30px'}} src={Qlikview}  />
    <h3>Qlikview</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'50px'}}>Qlikview is a 4th generation Business performance appli-<br/>cation. Global BI-Tech has built an in-house capability on<br/> use of QlikView, BI & Analytics tool to give customers the<br/> flexibility to develop their own analytical applications<br/> tailored to their data environments and business require-<br/>ments. QlikView customers can use this tool to build<br/> powerful analytical applications for the whole range of<br/> business functions – including finance, logistics, inventory<br/> management, business performance monitoring, and<br/> more.</p>
    </div>

   <div className='up' style={{position:'relative',animationName:'up',animationDuration:'2s'}}>
   <img style={{height:'350px', width:'400px'}} src={Tableau} />
    <h3>Tableau</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'20px'}}>Tableau is a powerful business intelligence and data<br/> visualization tool that has a very intuitive user inter-<br/>face. It made the whole decision making process<br/> more efficient and better by helping understand the<br/> data better, grasp concepts and identify patterns. We<br/> provide support for all desktop and server tableau<br/> solutions.</p>
    </div>
    
   <div className='down' style={{position:'relative',animationName:'down',animationDuration:'2s'}}>
   <img style={{height:'350px', width:'400px', marginLeft:'20px'}} src={Powerbi} />
    <h3>Power BI</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'20px'}}>We have team of specialist for Power BI. Power BI is a<br/> business analytics service provided by Microsoft. It pro-<br/>vides interactive visualizations with self-service business<br/> intelligence capabilities, where end users can create<br/> reports and dashboards by themselves, without having<br/> to depend on information technology staff or database<br/> administrators.</p>
    </div>
    
    </div>
    </>
  );
}
export default Businessintelligence;