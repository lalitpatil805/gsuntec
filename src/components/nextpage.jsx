import React from 'react';
import Header from './header';
import Technology from './technology.jpg';
import Methodology from './methodology.jpg';
import Businesschallenge from './businesschallenge.jpg'; 
import Datascience from './Datascience';
import Businessintelligence from './Businessintelligence';
import Testing from './Testing';
import Enterprisesolution from './Enterprisesolution';
import Mobilesolution from './mobilesolution';
import Footer from './footer';
function Nextpage() {
  return (
    <>
    <div>
    <Header/>
    <div>
        <div style={{color:'#2785D9', fontSize:'30px',fontWeight:'bold',opacity:'0.9'}}>We focus on 3 things</div><br/>
        <p style={{color:'#7a7a7a',marginBottom:'1.75em',lineHeight:'30px'}}>Our mission is rather simple; Global Suntech is committed to helping its customers with their goal and driving ambition to be the trusted partner of choice, delivering reliable, complete<br/> floating production solutions that create value for our clients, by sustainably and passionately leveraging the Company’s technology and operating experience.</p>
    </div><br/>
    
    <div style={{display:'flex',justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
        
    <div className='down' style={{boxSizing:"border-box", height:'650px', width:'450px', border:'1px solid black',position:'relative',animationName:'down',animationDuration:'2s'}}><br/>
    <img style={{height:'250px', width:'430px'}} src={Technology} /><br/><br/>
    <h3>Technology</h3><br/>
    <p style={{opacity:'0.9',lineHeight:'30px'}}>For Automation, Productivity And Convenience<br/> Throughout All Industries – Consumer And Business-To-  <br/>Business.Technology Has Greater Impact Effects On<br/> Business Operations. Technology Helps Businesses To  <br/> Remain Innovative, Competitive, And Match The Current<br/> Challenges.No Matter The Size Of Organization,<br/> Technology Has Both Tangible And Intangible Benefits.<br/> We Provide Customers Our Expertise And Experiences To<br/> Achieve Goals And Aspirations</p>
    </div>

    <div className='up' style={{boxSizing:"border-box", height:'650px', width:'450px', border:'1px solid black',position:'relative',animationName:'up',animationDuration:'2s'}}><br/>
    <img style={{height:'250px', width:'430px'}} src={Methodology} /><br/><br/>
    <h3>Methodology</h3><br/>
    <p style={{opacity:'0.9',lineHeight:'30px'}}>Selecting Right Methodology Is The Crucial To Getting<br/> The Job Right. The Best Set Of Processes For Your<br/> Organization Might Be A Combination Of Frameworks And<br/> Methodologies Rather Than Just One. Our Clients Depend<br/> On Our Ability To Deliver Based On Their Business<br/> Processes And Domain. Right Methology and software<br/> solution is necessary for streamlining work process,<br/> improving business productivity, cutting down costs and<br/> solving other major business tasks.</p>
    </div>

    <div className='down' style={{boxSizing:"border-box", height:'650px', width:'450px', border:'1px solid black',position:'relative',animationName:'down',animationDuration:'2s'}}><br/>
    <img style={{height:'250px', width:'430px'}} src={Businesschallenge} /><br/><br/>
    <h3>Business Challenges</h3><br/>
    <p style={{opacity:'0.9',lineHeight:'30px'}}>The Complexity Of A Business Book Goes Up With Each<br/> Business. We Live In Rapidly Changing Times, Especially<br/> For Businesses. We Are Leading Software Company<br/> Providing Smart Solutions To Address Your Business<br/> Challenges. We Go Above And Beyond To Help Client<br/> Achieve their Business Objectives And Overcome<br/> Business Challaenges. Our Experience And Experise Is<br/> The Key To Our Objectivity, And Allows Our Experts To<br/> Provide Best Technical Solutions That Clients Can Trust.</p>
    </div>

        </div><br/>

    <div>
        <h5>WHAT WE DO</h5><br/>
    </div>

    <div className='page' style={{position:'relative',animationName:'page',animationDuration:'2s'}}>
        <h5 style={{marginRight:'1000px', marginTop:'30px'}}>Services We Offer</h5>
        <p style={{marginLeft:'500px', marginTop:'-60px', textAlign:'left',lineHeight:'30px'}}>WE USE TECHNOLOGY AND creativity to TURN YOUR IDEAS INTO REALITY. This involves taking a structured approach, involving<br/> the right people to do the job and selecting the right technology. We enable clients to improve their decision-making capability<br/> by providing them access to a wide range of data analytics solutions, services, and resources. By harnessing cutting edge tech-<br/>nology and leveraging our key technology partnerships, we offer cost effective and innovative solutions from a strong team of<br/> technology professionals</p>

    </div><br/>

    <Datascience/><br/>
    <Businessintelligence/><br/>
    <Testing/><br/><br/>
    <Enterprisesolution/><br/><br/>
    <Mobilesolution/><br/>
    <Footer/> 
    </div>
    </>
  );
}

export default Nextpage;