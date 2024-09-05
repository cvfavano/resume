import React from 'react';
import {useState, useId} from 'react';


function WorkExperienceForm(props) {

    const [showForm, setShowForm] = useState(true);
  
console.log( props.props);
    const AddNewExperience = function (){
        console.log('clear form update list')
        props.addHandler();
        console.log('add new state')
        console.log({props:props.props})
        console.log({props:props})
     }
        function saveForm(){console.log('close form')}
    function editExperience(){'open form with details'}
    function deleteExperience(){'delete form'}
     
        const id = useId();
        return (

            <div>
                
                <button type="button" onClick={AddNewExperience}>Add New</button>
                
                <button type="button" onClick={()=> {saveForm}}>Save</button>
                <button type="button" onClick={()=> {editExperience}}>Edit</button>
                <button type="button" onClick={()=> {deleteExperience}}>Delete</button> 
             {showForm &&        
            <div className = "form-container">        
            <label htmlFor= { id + 'company' } >Company</label>

            <input 
            type="text"
            name = 'company'
            value={props.props.company}
            onChange={()=>changeHandler}
            id={id + 'company'}

            /> 
                
            <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={props.props.title}
            onChange={(event)=>props.changeHandler}
            id={id + 'title'}
            /> 
                    
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={props.props.startDate}
            onChange={(event)=>props.changeHandler}
            id={id + 'startDate'}
            /> 

            <label htmlFor={id + 'endDate'} >End Date</label>

            <input 
                type="date"
                name = 'endDate'
                value={props.props.endDate}
                onChange={(event)=>props.changeHandler}
                id={id + 'endDate'}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
                name = 'details'
                value={props.props.details}
                onChange={(event)=>props.changeHandler}
                id={id + 'details'} 
                ></textarea>
    
    </div> 
}
    </div>
        )
    }
        

    


export default WorkExperienceForm