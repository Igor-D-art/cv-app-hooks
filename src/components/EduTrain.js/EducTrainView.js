import React from "react";

export function EducTrainView(props) {
    
    return (
        <div className="educations-views">
            <h2 className="education-title">Education and trainings</h2>
            <ul>{ 
                props.educations.map((education) => {
                    const key = props.educations.indexOf(education);
                return (
                    <div key={key} className="educ-container-view">
                        <div className={'year-view'}>
                            <p className="year-v"> {education.year} </p>
                        </div>

                        <div className={'univ-view'}> {education.univ}
                        </div>
                </div>)})}
            </ul>
    </div>
   )
}