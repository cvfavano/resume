import { useState } from 'react'
import './App.css'
import  uuid  from 'react-uuid';
import PersonalInfoInput from './components/PersonalInfoInput.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import WorkExperienceForm from './components/WorkExperienceForm.jsx'
import WorkExperienceDetails from './components/WorkExperienceDetails.jsx'
import Education from './components/Education.jsx'
import EducationDetails from './components/EducationDetails.jsx' 

function App() {

//todo, toggle edit mode
//const [showButtons, setButtons] = useState(true);


  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Maki Bao',
    email: 'cali@google.com',
    phone: '(909) 876 - 1232',
    address: 'Carlsbad, CA'
  })

  const [experience, setExperience] = useState([{
    id: uuid(),
    company:'AGK Consulting',
    startDate: '2000-01-22',
    endDate: '2005-02-15',
    title: 'Consultant',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
])
const [workForm, setWorkForm] = useState({
  id: experience.id,
    company:'AGK Consulting',
    startDate: '2000-01-22',
    endDate: '2005-02-15',
    title: 'Consultant',
    details: 'Lorem ipsum dolor sit amet, consectetur adi'}
)

const [education, setEducation] = useState({
  name:'ACS University',
  major: 'BSc Chemical Engineering',
  location:'London, UK',
  date: '2006-12-12'
})


const handlePersonalChange = (event) => {
    
  const {name, value} = event.target;

  setPersonalInfo(previousState => ({
    ...previousState,
    [name]: value
  }))
}

const handleDelete = (id) => {

  let filteredExperience = experience.filter((job => job.id !== id ));
  
  setExperience(filteredExperience)  
  setWorkForm(filteredExperience.at(-1))
}

if(experience.length === 0 ){
  console.log('here')
  const newExperience = {
    id: uuid(),
    company:'Add Company',
    startDate: '',
    endDate: '',
    title: 'Add Title',
    details: 'Add Description'
  }
  setExperience([newExperience])  
  setWorkForm(newExperience)
}

//form updates only
  const handleUpdateWorkHistoryForm = (event, id) => {

    const {name, value} = event.target;
    
      const updateExperience = experience.map((job) => {
       
        if (job.id  === id) 
         return( {...job, [name]: value});
        
        else 
         return job;
        })

      setExperience(updateExperience);

        const updateWorkForm = workForm.map((job) => {
          if (job.id  === id) 
            return( {...job, [name]: value});
          
          else  return job;
        })
        setWorkForm(updateWorkForm);
    }

    //edit button trigger //update state of experience and workForm
   
  
  const handleCreateWorkHistory = () => {
   
    const newId = uuid()
    const newWorkHistory=  {
      id: newId,
      company:'New Company',
      startDate: '',
      endDate: '',
      title: 'Add Title',
      details:'Add Details'
    }
    
    setExperience(previousState => ([
      ...previousState,
      newWorkHistory
    ]))
    setWorkForm(newWorkHistory)
   
  }
 
  const loadUpdateToForm = (id) => {

    let jobToUpdate = experience.filter(job => {
      if(job.id === id) 
        return job
      
    })
    
    setWorkForm(jobToUpdate[0])
    console.log(jobToUpdate[0])
    console.log(workForm)
  }
   
  return (
    <div className='container'>
      <div id='sidebar'>
        <PersonalInfoInput 
          props =  { personalInfo }
          changeHandler = { () => {handlePersonalChange(event)} }
        /> 
        
      <div>
        <WorkExperienceForm
          details = { workForm }
          onChangeHandler = { handleUpdateWorkHistoryForm }
          addHandler = { handleCreateWorkHistory } />
      </div>
  
      <Education 
        props = {education}
        changeHandler={ () => {handlePersonalChange(event, setEducation)} }
      />

      </div>
    
      <div id='main'>
     
        <PersonalDetails details = { personalInfo } /> 

      
        <div>
          <h2 className='header'>Work Experience</h2>
          <WorkExperienceDetails 
            details = { experience } 
            deleteHandler = { handleDelete } 
            editHandler = { loadUpdateToForm }  
          />
        </div>
        
        <EducationDetails details = { education } />
       
        
    
      </div>

    </div>
  )
}

export default App
