import React from "react";

function PersonalDetails(props) {



    return (
        
        
     <div id="personal-details">
        <p className='cv-name'>{props.details.fullName}</p>
        <p>{props.details.address}</p>
        <p>
            {props.details.email}   &#9679;  <span>{props.details.phone}</span>
        </p>
        
        
    </div>
        
    )
}

export default PersonalDetails;