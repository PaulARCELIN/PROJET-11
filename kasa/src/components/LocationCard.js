import React from "react"
import { Link } from 'react-router-dom'

function LocationCard({title, cover, id}) {
    return (<Link to={'/logement/?id='+id} className="loc-card">
        <img src={cover} alt={title} className="loc-img"></img>
        <p className="loc-title">{title}</p>
    </Link>)
}

export default LocationCard