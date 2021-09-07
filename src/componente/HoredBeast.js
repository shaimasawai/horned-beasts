import React, { Component } from 'react'

 class HoredBeast extends Component {
     constructor(props){
         super(props)
         this.state={
            
             likes :0,

         }
     }
    //  likesandimg =()=>{
    //      this.setState(
    //          {
    //              NUMBERIMG:this.state.NUMBERIMG+1,
    //              likes: this.state.likes+1,
    //          }
    //      )
    //  }

     clickimg=() =>{
         this.setState({
            likes:this.state.likes+1
         })
         
         
     }


    render() {
        return (
            <div>
              <h2> {this.props.title}</h2>
              <img style={{width:"600px"}} onClick={this.clickimg} src={this.props.image_url} title={this.props.title} alt={this.props.title} />
              <h3>{this.state.likes} 💖 </h3>
              <h4>{this.props.description}</h4>
              <h4>{this.props.keyword}</h4>
              <h4>{this.props.horns}</h4>
              


            </div>
        )
    }
}

export default HoredBeast

