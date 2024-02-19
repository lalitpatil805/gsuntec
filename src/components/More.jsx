import React from "react";
import Header from './header';
import morepic from './morepic.jpg';
import Tollplazaproduct from './Tollplazaproduct.jpg';
import efile from './efile.jpg';
import Footer from './footer';
function More() {
    return(
<>
<Header/>
<div className="More">
<div className="port">
<h3 style={{ fontSize: "40px", color: "#6ec1e4",fontWeight:"bold", opacity:"0.9"}}>Product Details</h3>
<b style={{color: "black", fontWeight: "bold", fontSize: "20px", marginRight:'850px',opacity:'0.6'}}>Port/Terminal Management:</b>
<p style={{fontFamily:'inherit',textAlign:'left',marginLeft:'200px'}}>The amount of work involved in checking the schedule of each consignment can become overwhelming. Moreover, scheduling of workers to load or unload<br/> the shipment can become stressful. This product takes care of all these tasks.  Moreover, it increases visibility of your yard and streamlines the dock<br/> appointments.
<br/>With our BI Products, it is possible to view micro schedule and all actions can be taken to ensure that shipment is made as per the schedule including<br/> arrival, departure, loading, unloading, yard management. Schedule for maintenance of the machinery on the port, use of the machinery to performance cost<br/> effective and efficient use.</p>
</div>
<div className="advantages">
<h3 style={{color: "black", fontWeight: "bold", fontSize: "20px", marginRight:'1010px',opacity:'0.6'}}>Advantages:</h3>
<p style={{fontFamily:'inherit',marginLeft:'200px',textAlign:'left'}}> <b>A stronger competitive advantage</b> as a result of reductions in shipping<br/> delays and optimized unloading/loading<br/><b> Reduced risk of detention time.</b> Decreased risk of detention time leads<br/> to benefits for truckers, capable of spending more time on the road,<br/> not waiting in your yard<br/><b>Improved eligibility for shipper-of-choice status.</b> Efficient yard and<br/> dock management are crucial to obtaining shipper-of-choice status.<br/><b> To identify potential issues.</b> Since the system is automated, managers<br/> can review a 360-degree view of the yard/ terminal at any time to re-<br/>evaluate planned activities and more<br/><b>Better management</b> as this provides all information at one place<br/> including forecasting it reduces risk of delays to both terminal and<br/> shipping companies.<br/><b> Automated alerts and notifications</b> to help companies respond to<br/> changes in demand, essential to success in the omnichannel world<br/><b> Improved planning</b> Visualized KPI dashboards & automated<br/> communications enable control of recourses<br/><b>Increased load capacity</b> Clearly stated shipment volumes increase<br/> warehouse load capacity by up to 20%<br/><b> Reduced waiting time</b> Scheduling Inbound & Outbound arrivals prevent<br/> traffic congestion & driver waiting time</p>
<img style={{height:'500px', width:'500px',marginLeft:'500px',marginTop:'-560px',position:'relative'}} src={morepic}  />
</div>
<div className="">
<p style={{textAlign:'left',marginLeft:'200px'}}><b>Toll Plaza Monitoring System:</b> India had 29,666 km highway length and 566 toll plazas, as on March 2020, where toll was collected.<br/> With heavy-duty traffic habitually on the menu for Indian drivers, snaking queues at toll plazas is always an additional headache, not to mention a waste<br/> of time as well. Current system implemented for toll collection across India has fair share of issues such as tags are damaged, not functioning properly,<br/> vehicles are skipping queues, due to damaged tags double deduction of fees and sometime its not working at all.<br/> Our system is advance AI enabled monitoring system which register details of each and every passing through tolls and provide accurate calculation of<br/> number of vehicles passing, toll fee collections. This helps fraud preventions and provide related proves of vehicles passing through.</p>
<div style={{textAlign:'left',marginLeft:'180px'}}>
<ul style={{listStyleType:'square'}}>
<li> Data can access from anywhere</li>
<li>Cloud based solution</li>
<li>Multiple platform support</li>
<li>Multiple Intelligence for Fraud Prevention (Image and software)</li>
<li>AI enabled Live OCR (Optical Character Recognition) to collect all<br/> vehicle information</li>
<li>Realtime data capturing system</li>
<li>Multiple Fraud Prevention Techniques</li>
<li>95% Vehicle Data Capture</li>
<li>Intelligent Reporting and Analytics</li>
</ul>
<img style={{height:'330px', width:'500px',marginLeft:'600px',marginTop:'-250px',position:'relative'}} src={Tollplazaproduct}/>
</div>
</div><br/>
<div className="">
<p style={{textAlign:'left',marginLeft:'190px'}}><b>eFile Management System</b> is a solution for all government/Non Government functionaries to monitor their Daily Branch, Section and Table wise file<br/> movement of their own Office. eFile System is helping for file creation and sharing movement from one desk to another desk, creation of department wise<br/> files and draft for approval, dispatch of files, desk wise setting due dates and reminders, desk wise queries and report and migration of files from one desk<br/> to another desk along with tracking system.</p>
<b style={{textAlign:'left',marginRight:'900px'}}>Key Features of the eFile System:</b>
<div style={{textAlign:'left',marginLeft:'180px'}}>
    <ul style={{listStyleType:'disc'}}>
        <li>Paperless solution</li>
        <li> Department wise files creation/drafting </li>
        <li>Movement of Files from one desk to other desk.</li>
        <li>Creation of department wise Files & Drafts for approval and final<br/> issue.</li>
        <li>Setting Desk wise Due Dates and Reminders.</li>
        <li>Can track the performance of the department/organization based</li>
        <li>Centralized system for files across all departments</li>
        <li>Dashboard to track all file movements</li>
        <li>Tracking of every file</li>
        <li>Tracking status of every file</li>
        <li>Transfer of old files to this system is easy</li>
        <li>Facility to provide access outside organization</li>
        <li>Alert system for overdue files</li>
        <li>Leave management system is integrated with efiles system</li>
        <li>Easy to use</li>
        <li>Secured system</li>
    </ul>
    <img style={{height:'360px', width:'500px',marginLeft:'600px',marginTop:'-550px',position:'relative'}} src={efile}/>

</div>
</div>
<Footer/>
</div>
</>
);
}
export default More;