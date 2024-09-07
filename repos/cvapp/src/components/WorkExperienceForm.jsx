import React from 'react';
import { useId } from 'react';


function WorkExperienceForm(props) {

    const workExperience = props.details.at(-1);    
   
    const AddNewExperience = function (){ 
        props.addHandler() ;
    } 
    //is this needed
    const id = useId();
    return (
        <div>
            <button type="button" onClick={AddNewExperience}>Add New</button>
             
            <div className = "form-container">        
                <label htmlFor= { id + 'company' } >Company</label>

                <input 
                    type="text"
                    name = 'company'
                    value={workExperience.company}
                    onChange={()=>props.onChangeHandler(event, workExperience.id)}
                    id={id + 'company'} 
                />
            

                <label htmlFor={id + 'title'} >Title</label>

                <input 
                    type="text"
                    name = 'title'
                    value={workExperience.title}
                    onChange={()=>props.onChangeHandler(event, workExperience.id)}
                    id={id + 'title'}
                /> 
                        
                <label htmlFor={id + 'startDate'} >startDate</label>

                <input 
                    type="date"
                    name = 'startDate'
                    value={workExperience.startDate}
                    onChange={()=>props.onChangeHandler(event, workExperience.id)}
                    id={id + 'startDate'}
                /> 

                <label htmlFor={id + 'endDate'} >End Date</label>

                <input 
                    type="date"
                    name = 'endDate'
                    value={workExperience.endDate}
                    onChange={()=>props.onChangeHandler(event, workExperience.id)}
                    id={id + 'endDate'}
                /> 

                <label htmlFor = {id + 'details'}>Details</label>
                <textarea 
                    name = 'details'
                    value={workExperience.details}
                    onChange={()=>props.onChangeHandler(event, workExperience.id)}
                    id={id + 'details'} 
                    >
                </textarea>
            </div>
        </div>
    )
}
            

export default WorkExperienceForm