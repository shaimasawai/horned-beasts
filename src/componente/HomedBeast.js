import React, { Component } from 'react'

 class HomedBeast extends Component {
     constructor(props){
         super(props)
         this.state={
             NUMBERIMG :0,
             likes :0,

         }
     }
     likesandimg =()=>{
         this.setState(
             {
                 NUMBERIMG:this.state.NUMBERIMG+1,
                 likes: this.state.likes+1,
             }
         )
     }

     click =() =>{
         this.props.modal({
             title:this.props.title,
             img_url : this.props.img_url,
             description :this.props.description,
             horns :this.props.horns,
         }
         )
     }


    render() {
        return (
            <div>
               <button>{this.state.NUMBERIMG}</button>
               <button onClick={this.click}> click</button>

            </div>
        )
    }
}

export default HomedBeast
