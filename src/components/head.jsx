import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import { Navitems } from './Navitems';
 
function Head() {
  return (
    <>
    <nav className='navbar' style={{display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
        <div to="/" className="navbar-logo">
        <div className='logo' style={{ marginRight: "900px", fontSize: "25px", fontWeight: "bold" }}><img style={{ height: "30%", width: "25%" }} src={logo} alt="" /><span style={{color: "aqua", fontWeight: "bold", fontSize: "30px" }}>Global Suntec</span> Solutions</div>
        
        <ul className='nav-items'>
            {Navitems.map(item => { 
               
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
    
            })}
          </ul>
        </div>
    </nav>
    </>
  );
}
export default Head;