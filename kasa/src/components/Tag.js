import React from "react";

function Tags({ tagList }) {
    
    return (<div className="details-taglist">
        {tagList.map(element => {
            return (<div className="details-tag" key={element}>{element}</div>)
        })}
    </div>)
    
}

export default Tags

