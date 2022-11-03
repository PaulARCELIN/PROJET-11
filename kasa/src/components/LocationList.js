import { data } from "../datas/data"
import React from "react"
import LocationCard from "./LocationCard"
import '../styles/LocationList.css'

function LocationList() {
  return (
    <div className="loc-list">
        {data.map((e) => (
            <LocationCard title={e.title} cover={e.cover} key={e.id} id={e.id} />
        ))}
    </div>
  )
}

export default LocationList