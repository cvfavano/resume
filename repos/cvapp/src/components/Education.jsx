import React from 'react'
import uuid from 'react-uuid'

function Education({props, clickHandler}) {

    return(
        <div>
            <hr />
             <h4>Education</h4>
            <label htmlFor ='name'>Name</label>
            <input 
            value = {props.name}
            name= 'name'
            type="text"
            id={uuid()}
            onChange = {clickHandler}
            />

            <label htmlFor ='date'>Graduation Date</label>
            <input 
            value = {props.date}
            name= 'date'
            type="date"
            id={uuid()}
            onChange = {clickHandler}
            />

            <label htmlFor ='major'>Major</label>
            <input 
            value = {props.major}
            name= 'major'
            type="text"
            id={uuid()}
            onChange = {clickHandler}
            />
            
            <label htmlFor ='location'>Location</label>
            <input 
            value = {props.location}
            name='location'
            type="text"
            id={uuid()}
            onChange = {clickHandler}
            />

        </div>
    )

}

export default Education