import React from "react";

export function SummaryView(props) {

    return (
        <div>
            <h2 className="summary-title">Summary</h2>
            <div className="summary-view">{props.summary} </div>
        </div>
        
    )
}