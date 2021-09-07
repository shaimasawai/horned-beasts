import React, { Component } from 'react'
import hornedbeastsdata from './data.json'
import HoredBeast from './HoredBeast'





class Main extends Component {
    render() {

        return (
            <>
                {
                    hornedbeastsdata.map(item => {
                        return (
                            
                            <HoredBeast
                                title={item.title}
                                image_url={item.image_url}
                                description={item.description}

                            />
                        )
                    })
                }



            </>
        )
    }
}

export default Main
