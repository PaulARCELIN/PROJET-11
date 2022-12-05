import React, { useState } from "react";
import '../styles/Collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (<div className="collapse">
        
        <button onClick={toggle} className="collapse-btn">
            {title}
            {!isOpen && <i className="fa-solid fa-chevron-down chevron-collapse"></i>}
            {isOpen && <i className="fa-solid fa-chevron-up chevron-collapse"></i>}
        </button>
        {isOpen && <div className="collapse-content">{content}</div>}
        
    </div>)
}

export default Collapse