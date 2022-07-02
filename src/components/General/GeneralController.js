import React from "react";

export function GeneralController(props) {
    console.log('im here, re-render happened')
    console.log(props)
    return (
        <div className="general-controllers">
            <div className="general-img-contr">
                <label htmlFor="image">Click to add photo</label>
                <input id="image" type="file" accept=".jpg, .jpeg, .png, .webp" onChange={props.onImageChange}></input>
            </div>

            <div className="general-info-contr">
                <div className="general-name">
                    <input className="name" value={props.name} onChange={props.onNameChange}></input>
                </div>

                <div className="general-details-contr">
                    <textarea className="details" value={props.details} onChange={props.onDetailsChange} rows="7"></textarea>
                </div>

                <div className="general-links-contr">
                    <ul>
                        {props.links.map((link) => {
                            const key = props.links.indexOf(link);
                            return (
                                <div key={key} className="links-contr">
                                <input data-key={key} id = "contact"  className="contacts" value={link.contact} onChange={props.onLinkChange}></input>
                                <input data-key={key} id = "link"  className="links" value={link.link} onChange={props.onLinkChange}></input>
                                <button
                                    data-key={key}
                                    onClick={props.remLink}>Remove</button>
                                </div>
                               
                            )
                        })}
                    </ul>
                    <button className="addLink" onClick={props.addLink}>Add Link</button>
                </div>    
                


            </div>   
    </div>)
}