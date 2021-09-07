import React,{Component } from "react";
import Header from './componente/Header';
import Main from './componente/Main';
import Footer from './componente/Footer';
import databeast from './componente/data.json'
import Selectbast  from "./componente/selectbast";
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dataHorne:databeast,
        show:false,
        datamodles:{},
  }
}
handleShow = (data)=>{
  this.setState({
    show:true,
    datamodles: data,


  })
}
handleClose = () =>{
  this.setState({
    show:false,
})
}



  render(){
   
    return(
      <div>
        <Header/>
        <Main chooesmodle={this.handleShow} data={this.dataHorne}  />
        <Selectbast exit ={this.handleClose} showmodle={this.handleShow}  datamodles= {this.props.datamodles} />
        
      
       
        <Footer/>

      </div>
    )
  }
}

export default App