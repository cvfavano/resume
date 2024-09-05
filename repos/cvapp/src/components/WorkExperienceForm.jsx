import React from 'react';
import {useState, useId} from 'react';


function WorkExperienceForm(props) {

    const [showForm, setShowForm] = useState(true);
  
    console.log(props.props.length)
    let currentProp = props.props.length -1; //is a num, last prop
    let currentID = currentProp.id
    console.log(currentID)
    console.log(props.props)
    console.log(props.props[currentProp].id) 

    const AddNewExperience = function (){ 
        props.addHandler() ;
    }

 //   function saveForm(){console.log('close form')}
   // function editExperience(){'open form with details'}
    //function deleteExperience(){'delete form'}
     
        const id = useId();
        return (

            <div value={currentID}>
                
                <button type="button" onClick={AddNewExperience}>Add New</button>
                
                {/* <button type="button" onClick={()=> {saveForm}}>Save</button>
                <button type="button" onClick={()=> {editExperience}}>Edit</button>
                <button type="button" onClick={()=> {deleteExperience}}>Delete</button>  */}
             {showForm &&        
            <div className = "form-container">        
            <label htmlFor= { id + 'company' } >Company</label>

            <input 
            type="text"
            name = 'company'
            value={props.props[currentProp].company}
            onChange={()=>props.onChangeHandler(event, currentID)}
            id={id + 'company'}

            /> 
                
            <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={props.props[currentProp].title}
            onChange={()=>props.onChangeHandler(event)}
            id={id + 'title'}
            /> 
                    
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={props.props[currentProp].startDate}
            onChange={()=>props.onChangeHandler(event)}
            id={id + 'startDate'}
            /> 

            <label htmlFor={id + 'endDate'} >End Date</label>

            <input 
                type="date"
                name = 'endDate'
                value={props.props[currentProp].endDate}
                onChange={()=>props.onChangeHandler(event)}
                id={id + 'endDate'}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
                name = 'details'
                value={props.props[currentProp].details}
                onChange={()=>props.onChangeHandler(event)}
                id={id + 'details'} 
                ></textarea>
    
    </div> 
}
    </div>
        )
    }
        

    


export default WorkExperienceForm