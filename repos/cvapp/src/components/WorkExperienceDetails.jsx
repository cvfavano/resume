import React from 'react';

function WorkExperienceDetails(props) {

    return(
        <div>
            <h2 className='header'>Work Experience</h2>
            <h3>{props.details.company}  </h3>
            <h4 className='title'>{props.details.title}
                <span>{props.details.startDate} to {props.details.endDate}</span>
              
            </h4>
            <p>{ props.details.details}</p>

            {/* <button>delete</button> */}
        </div>
    )
}

export default WorkExperienceDetails