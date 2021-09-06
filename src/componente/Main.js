import React, { Component } from 'react'
import HomedBeast  from './HomedBeast'
import png from '../img/p'
import unicorn from 'react-dom'


class Main extends Component {
    render() {
        let animal=[
            {
        name :'png',
        imge : png ,
        descrit: 'Rhinoceroses are some of the largest remaining megafauna: all weigh at least one tonne in adulthood. They have a herbivorous diet, small brains (400–600 g) for mammals of their size, one or two horns, and a thick (1.5–5 cm), protective skin formed from layers of collagen positioned in a lattice structure',

             },

            { name : 'unicorn',
            imge : unicorn,
            descrit : 'There are two subspecies of white rhinoceros: the southern white rhinoceros (Ceratotherium simum simum) and the northern white rhinoceros (Ceratotherium simum cottoni). As of 2013, the southern subspecies has a wild population of 20,405—making them the most abundant rhino subspecies in the world. However, the northern subspecies is critically endangered, with all that is known to remain being two captive females. ',



            } ]

        return (
            <>
               {
                   animal.map(elem =>{

                       return <HomedBeast title = { elem.name} description ={ elem.descrit} imgSrc={elem.imge} />
                   } )
               } 
            </>
        )
    }
}

export default Main
