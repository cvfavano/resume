import React from 'react';

function WorkExperienceDetails(props) {
    return(
        <div className = 'work-experience'>    
            {
                props.props.map((work, index) =>{
                    return(
                    <div key={index}>
                        
                        <h3>{work.company}  
                            <span>
                                <button onClick = { () => { props.editHandler(work.id) } }>Edit</button>
                                <button onClick = { () => { props.deleteHandler(work.id) } }>Delete</button>
                            </span>
                        </h3>
                        
                        <h4 className='title'>{work.title}
                        <span>
                            {work.startDate != '' ? work.startDate : 'start date'}
                            &nbsp; to &nbsp;   
                            {work.endDate != '' ? work.endDate : 'end date'}</span>
                        </h4>
                        
                        <p>{work.details}</p>

                    </div>
                    )
                })
            }
        </div>
    )
}



export default WorkExperienceDetails