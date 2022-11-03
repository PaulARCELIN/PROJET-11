import React from "react";
import Slideshow from "../components/Slideshow";
import Details from "../components/Details";

function Logement() {
    const search = window.location.search
    const params = new URLSearchParams (search)
    const id = params.get ('id')

    return (<div>
        <Slideshow id={id} /> 
        <Details id={id} />
    </div>)
}

export default Logement