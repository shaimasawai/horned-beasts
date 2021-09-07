import React,{Component } from "react";
import Header from './componente/Header';
import Main from './componente/Main';
import Footer from './componente/Footer';
// import data from "./componente/data.json"

class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       data:data,
//         show:false,
//         dataa:{},
//   }
// }
// showdata = (data)=>{
//   this.setState({
//     show:true,
//     dataa: data,


//   })
// }
// close = () =>{
//   this.setState({
//     show:false,
// })
// }
  render(){
   
    return(
      <div>
        <Header/>
        <Main   />
      
       
        <Footer/>

      </div>
    )
  }
}

export default App