import React from "react";

function PersonalDetails(props) {
//why is this nested
//is this prop drilling
        console.log(props.details)
   // console.log(props.props.fullName)


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