import React from 'react';
import Qlikview from './Qlikview.jpg';
import Tableau from './Tableau.jpg';
import Powerbi from './PowerBI.jpg';
function Businessintelligence() {
  return (
    <>
    <div style={{color:'#03AEF6', fontSize:'35px',fontWeight:'bold'}}>Business Intelligence</div>
    <img style={{height:'350px', width:'400px', marginRight:'100px'}} src={Qlikview}  />
    <img style={{height:'350px', width:'400px'}} src={Tableau} />
    <img style={{height:'350px', width:'400px', marginLeft:'100px'}} src={Powerbi} />
  
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
   
   <div>
    <h3>Qlikview</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px'}}>Qlikview is a 4th generation Business performance application.<br/> Global BI-Tech has built an in-house capability on use of Qlik-<br/>View, BI & Analytics tool to give customers the flexibility to de-<br/>velop their own analytical applications tailored to their data en-<br/>vironments and business requirements. QlikView customers can<br/> use this tool to build powerful analytical applications for the<br/> whole range of business functions – including finance, logistics,<br/> inventory management, business performance monitoring,<br/> and more.</p>
    </div>

   <div>
    <h3>Tableau</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px'}}>Tableau is a powerful business intelligence and data visualization<br/> tool that has a very intuitive user interface. It made the whole de<br/>-cision making process more efficient and better by helping under-<br/>stand the data better, grasp concepts and identify patterns. We<br/> provide support for all desktop and server tableau solutions.</p>
    </div>
    
   <div>
    <h3>Power BI</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px'}}>We have team of specialist for Power BI. Power BI is a business<br/> analytics service provided by Microsoft. It provides interactive<br/> visualizations with self-service business intelligence capabiliti-<br/>-es, where end users can create reports and dashboards by<br/> themselves, without having to depend on information techno-<br/>logy staff or database administrators.</p>
    </div>
    
    </div>
    </>
  );
}

export default Businessintelligence;