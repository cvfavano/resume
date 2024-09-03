import React from 'react';


export default function EducationDetails(props) {
 console.log(props)
    return(
        <div id="education-details">
            <h2 className="header">Education</h2>  
            <p className='education'>{props.details.major} - {props.details.name} {props.details.location} <span className="grad-date">{props.details.date} </span>  </p>
        </div>
    )
}