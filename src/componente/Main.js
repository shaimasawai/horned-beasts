import React, { Component } from 'react'
// import HomedBeast  from './HomedBeast'



class Main extends Component {
    render() {
       
        return (
            <>
             <h2>{this.props.title}</h2>
             <img src={this.props.image_url} alt={this.props.keyword}/>

             <p > number of horns: {this.props.horns} </p>
             <p> {this.props.description}</p>




            </>
        )
    }
}

export default Main
