import React, { useState } from "react";
import { data } from "../datas/data";
import '../styles/Slideshow.css'

function Slideshow({ id }) {
    const [current, setCurrent] = useState(0)

    let logement = ""
    data.forEach((l) => {
        if (l.id === id) {
            logement = l 
        }
    })
    
    const images = logement.pictures 

console.log(current)

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    if(!Array.isArray(images) || images.length <= 0) {
        return null 
    }

    return(<section className="slideshow">
        {images.length > 1 && <button onClick={prevSlide} className='prev-arrow'> ❮ </button>}   
        {images.map((slide, index) => {
            return (
                <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                 {index === current && (
                    <img src={slide} alt="slideshow" className="slide-img"></img>
                 )}
                 
            </div>
            
            )
        })}
        <div className="count">{current +1 }/{images.length}</div>
        {images.length > 1 && <button onClick={nextSlide} className='next-arrow'>❯</button>}
    </section>)
}

export default Slideshow