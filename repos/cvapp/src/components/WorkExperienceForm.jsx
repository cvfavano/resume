import React from 'react';
import { useId} from 'react';

//this only needs one work history from [{experience}]
function WorkExperienceForm(props) {
    console.log(props)
    const currentId = props.id;
    const workExperience = props.details.filter(job => job.id === props.id);
    console.log(workExperience)
    console.log(currentId)
  
    const AddNewExperience = function (){ 
        props.addHandler() ;
    } 
    const id = useId();
    return (

        <div >
                
            <button type="button" onClick={AddNewExperience}>Add New</button>
              
             
            <div className = "form-container">        
                <label htmlFor= { id + 'company' } >Company</label>

                <input 
                    type="text"
                    name = 'company'
                    value={workExperience[0].company}
                    onChange={()=>props.onChangeHandler(event, workExperience[0].id)}
                    id={id + 'company'} 
                />
            </div>

                
            <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={workExperience[0].title}
            onChange={()=>props.onChangeHandler(event, workExperience[0].id)}
            id={id + 'title'}
            /> 
                    
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={workExperience[0].startDate}
            onChange={()=>props.onChangeHandler(event, workExperience[0].id)}
            id={id + 'startDate'}
            /> 

            <label htmlFor={id + 'endDate'} >End Date</label>

            <input 
                type="date"
                name = 'endDate'
                value={workExperience[0].endDate}
                onChange={()=>props.onChangeHandler(event, workExperience[0].id)}
                id={id + 'endDate'}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
                name = 'details'
                value={workExperience[0].details}
                onChange={()=>props.onChangeHandler(event, workExperience[0].id)}
                id={id + 'details'} 
                ></textarea>
        </div>
    )
}
            

export default WorkExperienceForm