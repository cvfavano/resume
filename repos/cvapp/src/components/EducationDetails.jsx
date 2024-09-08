import React from 'react';


export default function EducationDetails(props) {
console.log(props)
    return(
        <div id="education-details-container">
            <h2 className="header">Education</h2>  

            { props.details.map((school, index) =>
                <div key={index} className = 'education-details'>
                    <div className='button-container'>
                        <button type="text" onClick = { () => { props.editHandler(school.id) }} >Edit</button>
                        <button type="text" onClick = { () => { props.deleteHandler(school.id) }}>Delete</button>
                    </div>
                    <p className='education'>{school.major} <span className="grad-date">{school.date} </span>  </p>
                    <p> {school.name} - {school.location}</p>
                </div>
      
            )}
      </div>
    )
}