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
const [showButtons, setButtons] = useState(true);
const [isEdit, setisEdit] = useState(false);

const [workForm, setWorkForm] = useState({
  id: uuid(),
  company:'',
  startDate: '',
  endDate: '',
  title: '',
  details: ''
})
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
  },
])


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
  setisEdit(false)
  setExperience((prevExperience)=> { 
     return prevExperience
      .filter((experience => experience.id !== id ))
  })  
  
}
  // CHECK: IS THIS THE CORRECT WAY TO HANDLE UNDEFINED STATE
  if(experience.length === 0) { 
    setExperience([{ 
      id: uuid(),
      company:'Add Company',
      startDate: '2000-01-22',
      endDate: '2005-02-15',
      title: 'Add Title',
      details: 'Add Description'
    }])
  }
    

//form updates only
  const handleUpdateWorkHistoryForm = (event, id) => {

    const {name, value} = event.target;
    
      const updateExperience = experience.map((job) => {
       
        if (job.id  === id) {
         
         return( {...job, [name]: value});
        }
        else 
         return job;
        })

      setExperience(updateExperience);
    }

    //edit button trigger //update state of experience and workForm
    const handleUpdateWorkHistoryFormfromEdit = (event, id) => {
    
      handleUpdateWorkHistoryForm(event, id);

          const {name, value} = event.target;
            const updateEditedExperience = workForm.map((job) => {
              if (job.id  === id) 
               return( {...job, [name]: value});
              
              else  return job;
            })
            setWorkForm(updateEditedExperience);
    }
  
  const handleCreateWorkHistory = () => {
    setisEdit(false);
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
  }
 
  const loadUpdateToForm = (id) => {
    setisEdit(true)
    let jobToUpdate = experience.filter(job => {
      if (job.id === id) 
        return job
      
    })
    setWorkForm(jobToUpdate)
    
  }
   
  return (
    <div className='container'>
      <div id='sidebar'>
        <PersonalInfoInput 
          props =  { personalInfo }
          changeHandler = { () => {handlePersonalChange(event, setPersonalInfo)} }
        /> 
        
        {/* 2 functions updating setstate{experience} (add and edit) how to go about this properly*/}
        { !isEdit ? 
          <div>
          <WorkExperienceForm
            details = {experience}
            onChangeHandler = { handleUpdateWorkHistoryForm}
            addHandler = {handleCreateWorkHistory} />
         </div>
        :
        <div>
        <WorkExperienceForm
          details = {workForm}
          onChangeHandler = { handleUpdateWorkHistoryFormfromEdit}
          addHandler = {handleCreateWorkHistory}
        />
       
        </div>
        } 
      {/* <Education 
        props = {education}
        changeHandler={ () => {handlePersonalChange(event, setEducation)} }
      /> */}

      </div>
    
      <div id='main'>
     
        <PersonalDetails details = { personalInfo } /> 

      
        <div>
          <h2 className='header'>Work Experience</h2>
          <WorkExperienceDetails 
            props = { experience } 
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
