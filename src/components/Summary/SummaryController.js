import React from "react";

export function SummaryController(props) {
    console.log(props)
    return (
        <div className="summary-controllers">
            <h2 className="summary-title">Summary</h2>
            <div className="summary-contr">
                <textarea className="summary" value={props.summary} onChange={props.onSummaryChange} rows="4"></textarea>
            </div>
        </div>
    )
}