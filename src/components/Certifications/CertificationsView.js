import React from "react";

export function CertificationsView(props) {

    return (
        <div className="certificatioins-view">
            <h2 className="experience-title">Certifications</h2>
            <div className="certs-view">
            {props.certs.map((cert) => {
                const key = props.certs.indexOf(cert);
                return (
                    <a key={key} href={cert.link} onClick={props.onClick}>{cert.name}</a>
                    )
                })}
            </div>
        </div>
        
    )
}