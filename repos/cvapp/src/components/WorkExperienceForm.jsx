import React from 'react';
import {useState, useId} from 'react';


function WorkExperienceForm(props) {

    const [showForm, setShowForm] = useState(true);
  
    console.log(props.details.length)
    let currentProp = props.details.length -1; //is a num, last prop //is this right?
    let currentID = currentProp.id
  //  console.log(currentID)
    console.log(props.details)
    console.log(props.details[currentProp].id) 

   const filteredList= props.details.filter(current =>
     current.id == props.details[currentProp].id)
   
     console.log('here' )
     console.log( filteredList)
    

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
            value={props.details[currentProp].company}
            onChange={()=>props.onChangeHandler(event, currentID)}
            id={id + 'company'}

            /> 
                
            <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={props.details[currentProp].title}
            onChange={()=>props.onChangeHandler(event)}
            id={id + 'title'}
            /> 
                    
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={props.details[currentProp].startDate}
            onChange={()=>props.onChangeHandler(event)}
            id={id + 'startDate'}
            /> 

            <label htmlFor={id + 'endDate'} >End Date</label>

            <input 
                type="date"
                name = 'endDate'
                value={props.details[currentProp].endDate}
                onChange={()=>props.onChangeHandler(event)}
                id={id + 'endDate'}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
                name = 'details'
                value={props.details[currentProp].details}
                onChange={()=>props.onChangeHandler(event)}
                id={id + 'details'} 
                ></textarea>
    
    </div> 
}
    </div>
        )
    }
        

    


export default WorkExperienceForm