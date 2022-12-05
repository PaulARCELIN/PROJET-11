import React from "react";
import Slideshow from "../components/Slideshow";
import Details from "../components/Details";
import { data } from "../datas/data";
import Error from '../pages/Error.js';

function Logement() {
    
    const search = window.location.search
    const params = new URLSearchParams (search)
    const id = params.get ('id')

    const allId = data.map((e) => {
        return e.id
    })

    console.log(allId)

   const idExist = allId.includes(id)

    if (idExist) {
        
        return (<div>
            <Slideshow id={id} /> 
            <Details id={id} />
        </div>)
    }
    else {
        return (<Error />)
    }
    
}

export default Logement