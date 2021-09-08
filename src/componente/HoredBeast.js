import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

 class HoredBeast extends Component {
     constructor(props){
         super(props)
         this.state={
            
             likes :0,
             vote:0,

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
            likes:this.state.likes+1,
            vote:this.state.vote+1,
         })
         
         
     }
     clickpuchtr =()=>{
         this.props.modle(
             {
                title: this.props.title,
                image_url: this.props.image_url,
                description: this.props.description
             }
         )
     }


    render() {
        return (
            <div>
              {/* <h2> {this.props.title}</h2>
              <img style={{width:"600px"}} onClick={this.clickimg} src={this.props.image_url} title={this.props.title} alt={this.props.title} />
              <h3>{this.state.likes} 💖 </h3>
              <h4>{this.props.description}</h4>
              <h4>{this.props.keyword}</h4>
              <h4>{this.props.horns}</h4> */}

    <Card style={{ width: "60%", height: "80%"  }} bg={'warning'} >
                      <Card.Img width = {300} height= {400} onClick={this.clickimg} variant="top" src={this.props.image_url} alt={this.props.title}/>
                      <Card.Body>
                          <Card.Title > {this.props.title}</Card.Title>
                          <Card.Text>{this.props.description}</Card.Text>
                      </Card.Body>
                      <Button variant="info">💖 {this.state.vote}</Button>
                      <Button onClick={this.clickpuchtr} variant="danger">  click Me</Button>

                      </Card>

              


            </div>
        )
    }
}

export default HoredBeast

