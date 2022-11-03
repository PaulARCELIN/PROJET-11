import React from "react"
import { data } from "../datas/data"
import Tags from "./Tag"
import Collapse from "./Collapse"
import '../styles/Details.css'
import RatingStar from "./Rating"

function Details({ id }) {
    
    let logement = ""
    data.forEach((l) => {
        if (l.id === id) {
            logement = l 
        }
    })

    console.log(logement.rating)

    return(<div className="details">
        <div className="details-top">
            <div className="details-top-left">
                <h1 className="details-title">{logement.title}</h1>
                <h2 className="details-location">{logement.location}</h2>
                <Tags tagList={logement.tags}/>
            </div>
            <div className="details-top-right">
                <div className="details-host">
                    <p className="details-host-name">{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Proprio" className="details-host-picture"></img>
                </div>
                <RatingStar rate={logement.rating} />
            </div>
        </div>
        <div className="details-bottom">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Equipements" content={logement.equipments} className="Test"/>
        </div>
    </div>)
} 

export default Details