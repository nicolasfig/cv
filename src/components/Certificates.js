import React from 'react';

const Certificates = (props) => (
    <div className="Certificates">
        <div className="Certificates-container">
            <h2>Certificates</h2>
            { 
                props.certificates.map((certificate, index) => (
                        <div className="Certificates-item" key={`Cert-${index}`}>
                            <h3>{certificate.date}</h3>
                            <p>{certificate.description}</p>
                        </div>
                ))
            } 
        </div>
    </div>
);

export default Certificates;