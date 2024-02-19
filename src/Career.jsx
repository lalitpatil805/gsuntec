import React from "react";
import Header from './components/header';
import Footer from "./components/footer";
function Career() {
    return(
<>
<Header/><br/>
<div className="Career">
<div className="Animation" style={{position:'relative',animationDuration:'2s',animationName:'down'}}>
<div className="" style={{display:'block',margin:'0px',padding:'0px',marginLeft:'220px',marginRight:'220px',backgroundColor:'GrayText',height:'50px'}}>
<h3 style={{fontSize: "40px", color: "#FFFFFF",fontWeight:"300"}}>CAREER OPPORTUNITY</h3>
</div><br/>
<div style={{marginRight:'800px'}}>
<h3 style={{color: "#2785D9", fontSize: "24px",lineHeight:'1.8'}}>Qlikview Developer</h3>
<h2 style={{color: "black", fontSize: "20px",marginRight:'83px',lineHeight:'1.8'}}>Requirements</h2>
</div>
<div className="para">
<p style={{fontFamily:'inherit',textAlign:'left',marginLeft:'257px',fontSize:'15px',lineHeight:'1.8'}}>Preferably candidate having 3-5 years of design and development experience using QlikView/Qlik Sense tool (Qlik Data Modeling, Set analysis, AGGR<br/>function, Alternate State, Drill Down, Cyclic Group, Incremental Load with update/Delete).<br/>
Strong SQL experience (Type of Joins, Analytical function [like RowNumber, Rank, Denserank], Subqueries/correlated subqueries).<br/>
Strong Data Warehousing experience with ETL knowledge (Star/Snowflake schema, Types of Dimension/Fact, Slowly Changing Dimension)<br/>
* Multi-tier QLIK Solution Architecture.<br/>
* Must have experience into Client Communication and Requirement gathering.<br/>
* Must be comfortable working as Individual Contributor.<br/>
Good to have:<br/>
* QlikView/Qlik Sense Server cluster installation/knowledge.<br/>
* Design and develop QlikView/Qlik Sense mobile applications.<br/>
* Qlik Sense extension experience, Advanced Reporting capabilities with Acquisition of NPrinting.<br/>
* QMC admin activities (Task creation, Scheduling job, Loop and reduce, License managing etc).<br/>
* Client management skills.
</p>
</div><br/>

<div style={{marginRight:'815px'}}>
<h3 style={{color: "#2785D9", fontSize: "24px",lineHeight:'1.8'}}>Python Developer</h3>
<h2 style={{color: "black", fontSize: "20px",marginRight:'70px',lineHeight:'1.8'}}>Requirements</h2>
</div>
<div className="para">
<p style={{fontFamily:'inherit',textAlign:'left',marginLeft:'257px',fontSize:'15px',lineHeight:'1.8'}}>Preferably candidate having 2-5 years.<br/>
* Good insight into Python, Pytest, Core Java and related frameworks.<br/>
* Experience in maintaining Continuous Integration Environments e.g. using Jenkins, Gradle, Maven, etc.<br/>
* Familiar with source control systems like GIT, subversion, Perforce, etc.<br/>
* Capable of taking end to end ownership of user stories (features) Design, Implementation, Test automation, etc.<br/>
* Understands the system requirements and able to come out with an optimum Architecture for complex features (Mandatory skill for Senior folks).<br/>
* Good Team Player and experience in working with remote Teams.<br/>
* Good verbal and written communication skills.
</p>
</div><br/>

<div style={{marginRight:'835px'}}>
<h3 style={{color: "#2785D9", fontSize: "24px",lineHeight:'1.8'}}>QA Automation</h3>
<h2 style={{color: "black", fontSize: "20px",marginRight:'45px',lineHeight:'1.8'}}>Requirements</h2>
</div>
<div className="para">
<p style={{fontFamily:'inherit',textAlign:'left',marginLeft:'257px',fontSize:'15px',lineHeight:'1.8'}}>A minimum one (1) years of web automation with Selenium, Appium, UFT, VBscript.<br/>
* A minimum two (2) years API test automation required.<br/>
* Experience in the following languages; Java, Cucumber, FEST.<br/>
* Experience with integration tools like Jenkins, Appitools is preferred.<br/>
* Experience using SQL with regard to writing and understanding queries and procedures.<br/>
* Ability to write solid documentation that supports the testing automation effort.<br/>
* Experience in creating, organizing and implementing test case automation through a common tool or set of tools.<br/>
* Ability to diagnose potential problems and solutions during the testing process.<br/>
* Excellent communication and interpersonal skills.<br/>
* Desired: Previous work experience with Cucumber framework.<br/>
* Desired: Previous work experience with JIRA
</p>
</div><br/>
</div>
<Footer/>
</div>
</>
);
}
export default Career;