import React, { useState } from "react";

function Collapse() {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (<div>
        <button onClick={toggle}>TITLE</button>
        {isOpen && <div>CONTENT</div>}
    </div>)
}

export default Collapse