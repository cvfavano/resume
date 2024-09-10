import React from 'react';
import { useId } from 'react';


function WorkExperienceForm(props) {

    const AddNewExperience = function (){ 
        props.addHandler() ;
    } 
    //is this needed
    const id = useId();
    return (
        <div className='work-form-container'>
            <h4>Work History</h4>
            <button type="button" onClick={AddNewExperience}>Add More</button>
             
            <div className = "form-container">        
                <label htmlFor= { id + 'company' } >Company</label>

                <input 
                    type="text"
                    name = 'company'
                    value={props.details.company}
                    onChange={ ()=>props.onChangeHandler(event, props.details.id) }
                    id={id + 'company'} 
                />
            

                <label htmlFor={id + 'title'} >Title</label>

                <input 
                    type="text"
                    name = 'title'
                    value={props.details.title}
                    onChange={()=>props.onChangeHandler(event, props.details.id)}
                    id={id + 'title'}
                /> 
                        
                <label htmlFor={id + 'startDate'} >Start Date</label>

                <input 
                    type="date"
                    name = 'startDate'
                    value={props.details.startDate}
                    onChange={()=>props.onChangeHandler(event, props.details.id)}
                    id={id + 'startDate'}
                /> 

                <label htmlFor={id + 'endDate'} >End Date</label>

                <input 
                    type="date"
                    name = 'endDate'
                    value={props.details.endDate}
                    onChange={()=>props.onChangeHandler(event, props.details.id)}
                    id={id + 'endDate'}
                /> 

                <label htmlFor = {id + 'details'}>Details</label>
                <textarea 
                    name = 'details'
                    value={props.details.details}
                    onChange={()=>props.onChangeHandler(event, props.details.id)}
                    id={id + 'details'} 
                    >
                </textarea>
            </div>
        </div>
    )
}
            

export default WorkExperienceForm