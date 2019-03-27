import React from 'react';

const Education = (props) => (
    <div className="Education">
        <div className="Education-container">
            <h2>Education</h2>
            {
                props.education.map((edu, index) => (
                        <div className="Education-item" key={`Edu - ${index}`}>
                            <h3>
                                {edu.degree} {edu.institution}
                            
                                <span> {edu.startDate} - {edu.endDate}</span>
                            </h3>
                        </div>
                ))
            }

        </div>
    </div>
);

export default Education;