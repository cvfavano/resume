import React from 'react';


export default function EducationDetails(props) {

    return(
        <div id="education-details">
            <h2 className="header">Education</h2>  

            { props.details.map((school, index) =>
                <div key={index}>
                    <button type="text" onClick = { () => { editHandler(school.id) }} >Edit</button>
                    <button type="text" onClick = { () => { deleteHandler(school.id) }}>Delete</button>

                    <p className='education'>{school.major} <span className="grad-date">{school.date} </span>  </p>
                    <p> {school.name} - {school.location}</p>
                </div>
      
            )}
      </div>
    )
}