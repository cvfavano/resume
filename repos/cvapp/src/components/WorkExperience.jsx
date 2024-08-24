import React from 'react';
import {useState, useId} from 'react';

function WorkExperience({props, changeHandler}) {
console.log(changeHandler)
    const handleSave = () => {
        console.log('save')
    }

    const handleEdit= () => {
        console.log('edit')
    }

    const id = useId();
    const [isReadOnly, setReadOnly] = useState(false);
    return(
        <div>
            {console.log(props)}
            <h4>Work Experience</h4>
            
            <label htmlFor={id + 'company'} >Company</label>

            <input 
            type="text"
            name = 'company'
            value={props.company}
            onChange={changeHandler}
            id={id + 'company'}
            readOnly={isReadOnly}
            /> 
                
                <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={props.title}
            onChange={changeHandler}
            id={id + 'title'}
            readOnly={isReadOnly}
            /> 
                       
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={props.startDate}
            onChange={changeHandler}
            id={id + 'startDate'}
            readOnly={isReadOnly}
            /> 

            <label htmlFor={id + 'endDate'} >startDate</label>

            <input 
                type="date"
                name = 'endDate'
                value={props.endDate}
                onChange={changeHandler}
                id={id + 'endDate'}
                readOnly={isReadOnly}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
               // type="textarea"
                name = 'details'
                value={props.details}
                onChange={changeHandler}
                id={id + 'details'}
                readOnly={isReadOnly}
            />                  


            <button onClick={handleSave}>Save</button>

            <button onClick={handleEdit}>Edit</button>
         </div>
    )
}

export default WorkExperience