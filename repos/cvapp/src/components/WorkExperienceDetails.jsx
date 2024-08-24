import React from 'react';

function WorkExperienceDetails(props) {

    return(
        <div>
            <h2 class='header'>Work Experience</h2>
            <h3>{props.details.company}  </h3>
            <h4 class='title'>{props.details.title}
                <span>{props.details.startDate} - {props.details.endDate}</span>
                {console.log(props.details.startDate)}
            </h4>
            <p>{typeof props.details.details}</p>

            <button>delete</button>
        </div>
    )
}

export default WorkExperienceDetails