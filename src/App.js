import React,{Component } from "react";
import Header from './componente/Header';
import Main from './componente/Main';
import Footer from './componente/Footer';

class AP extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>

      </div>
    )
  }
}

export default AP