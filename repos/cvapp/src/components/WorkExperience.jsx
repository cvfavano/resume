import React from 'react';
import {useState, useId} from 'react';

function WorkExperience({props, changeHandler}) {

    const [form, setForm] = useState({});

    const handleSave = () => {
        console.log('save')
        createForm()
        //collapse and clear form 
        //add new div with editable input
    }

    const handleEdit= () => {
        console.log('edit')
    }
    const handleDelete= () => {
        console.log('delete')
    }
    const id = useId();
   

    function createForm(){
        return(
            <div>
                 <hr />
                <h4>Work Experience</h4>
                
                <label htmlFor= { id + 'company' } >Company</label>
    
                <input 
                type="text"
                name = 'company'
                value={props.company}
                onChange={changeHandler}
                id={id + 'company'}
       
                /> 
                    
                <label htmlFor={id + 'title'} >Title</label>
    
                <input 
                type="text"
                name = 'title'
                value={props.title}
                onChange={changeHandler}
                id={id + 'title'}
                /> 
                           
                <label htmlFor={id + 'startDate'} >startDate</label>
    
                <input 
                type="date"
                name = 'startDate'
                value={props.startDate}
                onChange={changeHandler}
                id={id + 'startDate'}
                /> 
    
                <label htmlFor={id + 'endDate'} >End Date</label>
    
                <input 
                    type="date"
                    name = 'endDate'
                    value={props.endDate}
                    onChange={changeHandler}
                    id={id + 'endDate'}
                /> 
    
                <label htmlFor = {id + 'details'}>Details</label>
                <textarea 
                     name = 'details'
                    value={props.details}
                    onChange={changeHandler}
                    id={id + 'details'} 
                />                  
    
    
                {/* <button onClick={handleSave}>Save</button>
    
                <button onClick={handleEdit}>Edit</button> */}
                {/* <button onClick={handleDelete}>Delete</button> */}
             </div>
        )
    }
    
    return(
        createForm()
    )
}

export default WorkExperience