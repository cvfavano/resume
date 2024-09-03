import React from 'react'
import uuid from 'react-uuid'

function Education({props, changeHandler}) {
    console.log(props)
    console.log(props.name)
    const id = uuid();
    const { name, date, major, location } = props;
    return(
        <div>
            <hr />
            <h4>Education</h4>

            <label htmlFor ={id +'name'}>Name</label>
            
            <input 
                value = {name}
                name= 'name'
                type='text'
                id={id + 'name'}
                onChange = { changeHandler }
            />

            <label htmlFor ={id +'date'}>Graduation Date</label>
            <input 
                value = {date}
                name = 'date'
                type = 'date'
                id= { id + 'date' }
                onChange = { changeHandler }
            />

            <label htmlFor ={ id +'major' }>Major</label>
            <input 
                value = { major }
                name = 'major'
                type = 'text'
                id = { id + 'major'}
                onChange = { changeHandler }
            />
            
            <label htmlFor = { id + 'location' }>Location</label>
            <input 
                value = { location }
                name = 'location'
                type = 'text'
                id = {id + 'location' }
                onChange = { changeHandler }
            />
        </div>
    )

}

export default Education