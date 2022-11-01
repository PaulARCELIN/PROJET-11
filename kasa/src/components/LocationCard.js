import React from "react"

function LocationCard({title, cover}) {
    return (<div className="loc-card">
        <img src={cover} alt={title} className="loc-img"></img>
        <p className="loc-title">{title}</p>
    </div>)
}

export default LocationCard