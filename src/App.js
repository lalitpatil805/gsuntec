import './App.css';
import Head from './components/head';
import Navbar1 from './components/header';
import Navbar from './components/Navbar';
import ShapeExample from './components/img';
import DarkVariantExample from './components/corosol';
import About from './components/about';
import Our from './components/our';
import Why from './components/Why';
import Henry from './components/henry';
import Ourproduct from './components/Ourproduct';
import Ourclients from './components/ourclients';
import Footer from './components/footer';
import Nextpage from './components/nextpage';
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom";
import Mobilesolution from './components/mobilesolution';
import More from './components/More';
import Career from './Career';
import Contact from './contact';


function App() {
  return (
   <>
   <div>
  
    <div className="App">
{/*<Head/>*/}
{/*<Navbar/>*/}
<Navbar1/>
<ShapeExample/>
<DarkVariantExample/><br/><br/>
<About/><br/><br/>
<Our/><br/>
<Why/><br/>
<Henry/>
<Ourproduct/><br/><br/><br/>
<Ourclients/><br/><br/><br/>
<Footer/>
<Nextpage/><br/>
<More/><br/>

<Career/><br/><br/><br/><br/>
<Contact/>
</div>  
      {/*<BrowserRouter basename="/app">
        <Navbar/>
        <Switch>
          <Route></Route>
        </Switch>
  </BrowserRouter>*/}
<div>
    <Routes>
          <Route path="/src/components/ourproducts" component={Ourproduct} />
          <Route path="/mobilesolution" component={Nextpage} />
          <Route path="/businessintelligence" component={Nextpage} />
          <Route path="/testing" component={Nextpage} />
          <Route path="/enterprisesolution" component={Nextpage} />
    </Routes>
  </div>
  
  </div>
    </>
  );
}
export default App;