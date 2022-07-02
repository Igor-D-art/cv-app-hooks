import React from "react";

export function ExperienceView(props) {
    
    return (
        <div className="experience-views">
            <h2 className="experience-title">Work experience</h2>
            <ul>{ 
                props.experiences.map((experience) => {
                    const key = props.experiences.indexOf(experience);
                return (
                    <div key={key} className="exp-container-view">
                        <div className={'from-to-view'}>
                            <p className="from-v"> {experience.from} </p>
                            <p className="to-v"> {experience.to} </p>
                        </div>

                        <div className={'exp-details-view'}>
                            <h2 data-key={key}
                                className="title-v"
                                onChange={props.onChange}>{experience.title}
                            </h2>
                            <p className="company-v"> {experience.company} </p>
                            <p className="city-v"> {experience.city} </p>
                            <div className="activ-v"> {experience.activ} </div>
                        </div>
                </div>)})}
            </ul>
    </div>
   )
}
