import React from 'react';

function WorkExperienceDetails(props) {
console.log('her')
console.log(props)
    return(
        <div>    
            {
                props.props.map((work, index) =>{
                    return(
                    <div key={index}>
           
                        <h2 className='header'>Work Experience</h2>
                        <h3>{work.company}  </h3>
                        <h4 className='title'>{work.title}
                            <span>{work.startDate} to {work.endDate}</span>
                        </h4>
                        <p>{ work.details}</p>

                        <button>delete</button>
                    </div>
                    )
                })
            }
        </div>
    )
}



export default WorkExperienceDetails