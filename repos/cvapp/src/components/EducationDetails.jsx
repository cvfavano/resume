import React from 'react';


export default function EducationDetails(props) {

    return(
        <div id="education-details-container">
            <h2 className="header">Education</h2>  

            { props.details.map((school, index) =>
                <div key={index} className = 'education-details'>
                    <div className='button-container'>
                        <button type="text" onClick = { () => { props.readHandler(school.id) }} >Edit</button>
                        <button type="text" onClick = { () => { props.deleteHandler(school.id) }}>Delete</button>
                    </div>
                    <p className='education'>{school.major} <span className="grad-date">{school.date != '' ? school.date : 'Add date'} </span>  </p>
                    <p className='school-details'> {school.name} - {school.location}</p>
                </div>
      
            )}
      </div>
    )
}