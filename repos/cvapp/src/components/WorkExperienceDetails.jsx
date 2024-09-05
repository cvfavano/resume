import React from 'react';

function WorkExperienceDetails(props) {
console.log(props)
    return(
        <div>    
            {
                props.props.map((work, index) =>{
                    return(
                    <div key={index} data-id={work.id}>
           
                        
                        <h3>{work.company}  
                            <span>
                            <button data-id={work.id}>Edit</button>
                            <button data-id={work.id} onClick ={()=>{props.deleteHandler(work.id)}}>Delete</button></span></h3>
                        <h4 className='title'>{work.title}
                            <span>{work.startDate} to {work.endDate}</span>
                        </h4>
                        <p>{ work.details}</p>

                       
                    </div>
                    )
                })
            }
        </div>
    )
}



export default WorkExperienceDetails