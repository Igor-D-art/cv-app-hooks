import React from "react";

export function CertificationsController(props) {
    console.log(props)
    return (
        <div className="certifications-contr">
            <h2 className="experience-title">Certifications</h2>
                <ul>
                    {props.certs.map((cert) => {
                        const key = props.certs.indexOf(cert);
                        return (
                            <div key={key} className="cert-contr">
                                <input data-key={key} id = "name"  className="certName" value={cert.name} onChange={props.onCertChange}></input>
                                <input data-key={key} id = "link"  className="certLinks" value={cert.link} onChange={props.onCertChange}></input>
                                <button
                                    data-key={key}
                                    onClick={props.remCert}>Remove</button>
                            </div>
                        )
                    })}
                </ul>
                <button className="addCert" onClick={props.addCert}>Add Certificate</button>
            </div>    
    )
}