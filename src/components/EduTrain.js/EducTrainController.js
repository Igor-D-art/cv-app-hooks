import React from "react";

export function EducTrainController(props) {
    return (
        <div className="educations-controllers">
            <h2 className="education-title">Education and trainings</h2>
            <ul>{ 
                props.educations.map((education) => {
                    const key = props.educations.indexOf(education);
                    return (
                        <div key={key} className={'educ-container-contr'}>
                            <div className={'year-contr'}>
                                <input
                                    data-key={key}
                                    id="year"
                                    className="year"
                                    onChange={props.onChange}
                                    value={education.year} />
                            </div>
                            <div className="univ-contr">
                                <textarea
                                    data-key={key}
                                    id="univ"
                                    className="univ-c"
                                    onChange={props.onChange}
                                    value={education.univ}></textarea>
                            </div>
                        <button
                            data-key={key}
                            onClick={props.remEducation}>Remove</button>
                        
                </div>)})}
            </ul>
            <button className="addEduc" onClick={props.addEducation}>Add education or training course</button>
    </div>)
}