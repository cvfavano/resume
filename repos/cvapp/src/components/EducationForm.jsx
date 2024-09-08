import React from 'react'
import uuid from 'react-uuid'

function EducationForm(props) {
    // console.log(props)
    // console.log(props.name)
    const id = uuid();
 
    return(
        <div className="education-form-container">
            
            <button type = "text" onClick={ ()=>{createEducation(event, props.details.id)} }>Add</button>
            <h4>Education</h4>

            <label htmlFor ={id +'name'}>Name</label>
            
            <input 
                value = {props.details.name}
                name= 'name'
                type='text'
                id={id + 'name'}
                onChange = { props.details.onChangeHandler }
            />

            <label htmlFor ={id +'date'}>Graduation Date</label>
            <input 
                value = {props.details.date}
                name = 'date'
                type = 'date'
                id= { id + 'date' }
                onChange = { props.details.onChangeHandler }
            />

            <label htmlFor ={ id +'major' }>Major</label>
            <input 
                value = { props.details.major }
                name = 'major'
                type = 'text'
                id = { id + 'major'}
                onChange = { props.details.onChangeHandler }
            />
            
            <label htmlFor = { id + 'location' }>Location</label>
            <input 
                value = { props.details.location }
                name = 'location'
                type = 'text'
                id = {id + 'location' }
                onChange = { props.details.onChangeHandler }
            />
        </div>
    )

}

export default EducationForm