import React, { Component } from 'react'
import HomedBeast from './HomedBeast'
import data from './data.json'




class Main extends Component {
    render() {
       
        return (
            <div>
            {
                this.props.data.map(item=>{
                    return(
                        <HomedBeast
                        title ={item.title}
                        img_url={item.image_url}
                        description ={item.description}
                        mofal ={this.props.selectedmodal}
                        horns={this.props.horns}
                    />
                    )
                })
            }



            </div>
        )
    }
}

export default Main
