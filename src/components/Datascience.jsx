import React from 'react';
import Data from './data.jpg';
import Cloud from './cloud.jpg';
function Datascience() {
  return (
    <>
    <div style={{color:'black', fontSize:'35px',fontWeight:'bold'}}>Data Science</div>
    <img style={{height:'350px', width:'400px', marginRight:'330px'}} src={Data}  />
    <img style={{height:'350px', width:'400px'}} src={Cloud} />
    
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
   <div>
    <h3>Big Data</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px'}}>Specializes in Big Data analysis. This involves taking a structured approach, involving the right<br/> people to do the job and selecting the right technology.We enable clients to improve their de<br/>-cision making capability by providing them access to a wide range of data analytics solutions,<br/> services, and resources. Your data is growing every day & you can’t stop it –but you can control<br/> it with Big Data. Let’s find the business in your data!</p>
    </div>

    <div>
    <h3>Cloud Computing</h3><br/>
    <p style={{textAlign:'left',lineHeight:'30px'}}>At some point enterprises go through the decision-making process. Arguments can be made<br/> both ways and it is important to develop the right strategy. Using cloud technology provides<br/> many benefits like accelerated time-to-market, enhanced organizational flexibility and scala-<br/>bility, rapid resource provisioning, and lower total cost of ownership.</p>
    </div>
    </div>
    </>
  );
}

export default Datascience;