import React from 'react';
import logo from './logo.jpg';
import { Navitems } from './Navitems';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className='nav' style={{margin:'0', padding:'0',display:'flex',alignItems:'center', justifyContent:'space-evenly', flexDirection:'row'}}>
         
          
          <div className='logo' style={{ marginRight: "250px", fontSize: "25px", fontWeight: "bold" }}><img style={{ height: "30%", width: "25%" }} src={logo} alt="" /><span style={{color: "aqua", fontWeight: "bold", fontSize: "30px" }}>Global Suntec</span> Solutions</div>
          
          <ul className='nav-items'>
            {Navitems.map(item => {
              return(
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
              );
            })}
          </ul>

          </div>
    </>
  );
}

export default Navbar;