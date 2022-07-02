import React from "react";

export function ExperienceController(props) {
    console.log('im here, re-render happened')
    return (
        <div className="experience-controllers">
            <h2 className="experience-title">Work experience</h2>
            <ul>{ 
                props.experiences.map((experience) => {
                    const key = props.experiences.indexOf(experience);
                    return (
                        <div key={key} className={'exp-container-contr'}>
                            <div className={'from-to-contr'}>
                                <input
                                    data-key={key}
                                    id="from"
                                    className="from"
                                    onChange={props.onChange}
                                    value={experience.from} />
                                <input
                                    data-key={key}
                                    id="to"
                                    className="to"
                                    onChange={props.onChange}
                                    value={experience.to}/>
                            </div>
                            <div className="exp-details-contr">
                                <input
                                    data-key={key}
                                    id="title"
                                    className="title"
                                    onChange={props.onChange}
                                    value={experience.title} />
                                <input
                                    data-key={key}
                                    id="company"
                                    className="company"
                                    onChange={props.onChange}
                                    value={experience.company} />
                                <input
                                    data-key={key}
                                    id="city"
                                    className="city"
                                    onChange={props.onChange}
                                    value={experience.city} />
                                <textarea
                                    data-key={key}
                                    id="activ"
                                    className="activ"
                                    onChange={props.onChange}
                                    value={experience.activ}></textarea>
                            </div>
                        <button
                            data-key={key}
                            onClick={props.remExperience}>Remove</button>
                        
                </div>)})}
            </ul>
            <button className="addExp" onClick={props.addExperience}>Add Experience</button>
    </div>)
}