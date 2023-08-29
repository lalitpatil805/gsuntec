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
import Ourproduct from './components/ourproduct';

function App() {
  return (
    <div className="App">
  
<Navbar1/>
 <ShapeExample/>
<DarkVariantExample/>
<br/>
<br/>
<About/>
<br/>
<br/>
<Our/>
<VMPIcons/><br/>
<VMPName/><br/>
<Why/><br/>
<Henry/>
<Ourproduct/><br/>
<br/>
    </div>
  );
}

export default App;
