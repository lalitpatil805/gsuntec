import React from 'react';
import Data from './data.jpg';
import Cloud from './cloud.jpg';
function Datascience() {
  return (
    <>
    <div style={{color:'black', fontSize:'35px',fontWeight:'bold'}}>Data Science</div>
    
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
   
    <div className='down' style={{position:'relative',animationName:'down',animationDuration:'2s'}}>
   <img style={{height:'350px', width:'400px',marginLeft:'150px'}} src={Data}  />
    <h3>Big Data</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginLeft:'50px'}}>Specializes in Big Data analysis. This involves taking a structured approach,<br/> involving the right people to do the job and selecting the right technology.<br/>We enable clients to improve their decision making capability by providing<br/> them access to a wide range of data analytics solutions, services and<br/> resources. Your data is growing every day & you can’t stop it –but you can<br/> control it with Big Data. Let’s find the business in your data!</p>
    </div>

    <div className='up' style={{position:'relative',animationName:'up',animationDuration:'2s'}}>
    <img style={{height:'350px', width:'400px',marginRight:'80px'}} src={Cloud} />
    <h3 style={{marginRight:'80px'}}>Cloud Computing</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px',marginRight:'50px'}}>At some point enterprises go through the decision-making process. Arguments<br/> can be made both ways and it is important to develop the right strategy. Using<br/> cloud technology provides many benefits like accelerated time-to-market,<br/> enhanced organizational flexibility and scalability, rapid resource provisioning<br/> and lower total cost of ownership.</p>
    </div>
    </div>
    </>
  );
}
export default Datascience;