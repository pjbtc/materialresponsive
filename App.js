import React,{Component} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Navbar from './navbarrep';
import Home from './Home';
import Blog from './Blog';
import Contact from './contact';
import Footer from './footernew';
import Weather from './weather';
import Header from './headerrepthree';
import { Link as RouterLink } from "react-router-dom";
import Container from '@material-ui/core/Container';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
       
        <Header/>
        <Container  style={{position: "relative", height:'150%', marginTop:"100px", width:'80%' }} maxWidth='sm'>

        <Switch>
        <Route path ="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path ="/contact" component={Contact}/>
        <Route path="/weather" component={Weather}/>

        </Switch>
        </Container>

        <Footer/>
      </div>
      </BrowserRouter>
      )
  }
}
export default App;