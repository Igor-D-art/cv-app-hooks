import React from "react";

export function GeneralView(props) {

    return (
        // <div className="name-view">
        //     <h1> {props.name} </h1>
        // </div>

        <div className="general-view">
            <div className="general-img-view">
                {props.image === "" ? <img src="Default_image.png" alt=''></img> : <img src={props.image} alt=''></img>}
            </div>

            <div className="general-info-view">
                <div className="general-name">
                    <h1 className="name">{props.name}</h1>
                </div>

                <div className="general-details-view">{props.details} </div>

                <div className="general-links-view">
                    {props.links.map((link) => {
                        const key = props.links.indexOf(link);
                        return (
                            <a key={key} href={link.link} onClick={props.onClick}>{'Contact me in ' + link.contact}</a>
                            )
                        })}
                </div>
            </div>   
        </div>
    )
}