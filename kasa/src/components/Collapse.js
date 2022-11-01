import React, { useState } from "react";
import '../styles/Collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (<div className="collapse">
        <button onClick={toggle} className="collapse-btn">{title}</button>
        {isOpen && <div className="collapse-content">{content}</div>}
    </div>)
}

export default Collapse