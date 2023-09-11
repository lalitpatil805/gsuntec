//import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/header';
import ShapeExample from './components/img';
import DarkVariantExample from './components/corosol';
import About from './components/about';
import Our from './components/our';
import VMPIcons from './components/VMPIcons';
import VMPName from './components/VMPName';
import Why from './components/Why';
import Henry from './components/henry';
import Ourproduct from './components/Ourproduct';
import Ourclients from './components/ourclients';
import Footer from './components/footer';
import Nextpage from './components/nextpage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
     <Router>
    <div className="App">
  
<Navbar1/>
 <ShapeExample/>
<DarkVariantExample/><br/><br/>
<About/><br/><br/>
<Our/>
<VMPIcons/><br/>
<VMPName/><br/>
<Why/><br/>
<Henry/>
<Ourproduct/><br/><br/><br/>
<Ourclients/><br/><br/><br/>
<Footer/>
{/* <Nextpage/> */}
   
      {/* <Routes>
        <Route exact path='' component={Navbar1} />
        <Route path="Our Products" component={<Ourproduct/>} />
      </Routes> */}
      </div>
    </Router>
    </>
  );
}
export default App;