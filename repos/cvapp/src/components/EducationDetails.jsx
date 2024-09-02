import React from 'react';
import {useState, useId} from 'react';

export default function EducationDetails({props}) {
 console.log(props)
    return(
        <div id="education-details">
            <h2 class="header">Education</h2>  
        {/* <p className='education'>{props.details.name}</p>
        <p>{props.details.location}</p>
        <p>
            {props.details.date}   
        </p>
        <p>{props.details.major}</p> */}
            </div>
    )
}