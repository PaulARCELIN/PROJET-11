import React from "react";

function RatingStar({ rate }) {
    const range = [1, 2, 3, 4, 5]   

    return (
        <div className="details-rating">
            <div>
            {range.map((rangeElem) => rate >= rangeElem ? <span key={rangeElem.toString()} className="red-stars">★</span> : null
            )}
            </div>
            <div>
               {range.map((rangeElem) => rate < rangeElem ? <span key={rangeElem.toString()} className="grey-stars">★</span> : null
            )} 
            </div>
        </div>
    )
}

export default RatingStar

