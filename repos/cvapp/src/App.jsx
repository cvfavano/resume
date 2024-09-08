import { useState } from 'react'
import './App.css'
import  uuid  from 'react-uuid';
import PersonalInfoInput from './components/PersonalInfoInput.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import WorkExperienceForm from './components/WorkExperienceForm.jsx'
import WorkExperienceDetails from './components/WorkExperienceDetails.jsx'
import EducationForm from './components/EducationForm.jsx'
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
    id: '6482d9c8-46e9-506d-3a5a-53389eb4a7c7',
    company:'AGK Consulting',
    startDate: '2000-01-22',
    endDate: '2005-02-15',
    title: 'Consultant',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }])

  const [workForm, setWorkForm] = useState({
    id: '6482d9c8-46e9-506d-3a5a-53389eb4a7c7',
    company:'AGK Consulting',
    startDate: '2000-01-22',
    endDate: '2005-02-15',
    title: 'Consultant',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })

  const [education, setEducation] = useState([{
    id: '6482d9c8-46e9-506d-3a5a-53389eb4a7c8',
    name:'ACS University',
    major: 'BSc Chemical Engineering',
    location:'London, UK',
    date: '2006-12-12'
  }])

  const [educationForm, setEducationForm] = useState({
    id: '6482d9c8-46e9-506d-3a5a-53389eb4a7c8',
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

  const handleUpdateWorkHistoryForm = (event, id) => {

    const {name, value} = event.target
    const updateExperience = experience.map(job => {
      if (job.id  === id) 
        return( {...job, [name]: value})
      
      else 
        return job;
      })
        
      setExperience(updateExperience)
    
      setWorkForm(prevWorkForm => ({
        ...prevWorkForm, 
        [name]: value
        })
      )         
    }

 
   
  
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
  }

const createEducation = () => {
  const newId = uuid();
  const newEducation =  {
    id: newId,
    name:'Update School/University',
    major: 'Update Major',
    location:'Update City',
    date: ''
  }
  
  setEducation(previousState => ([
    ...previousState,
    newEducation
  ]))
  setEducationForm(newEducation)
}
const readEducation = (id) => {

  let educationToUpdate = education.filter(school => {
    if(school.id === id) 
      return school
    
  })
  setEducationForm(educationToUpdate[0])
}

const updateEducationForm = (event, id) => {

  const {name, value} = event.target

  const updatedEducation = education.map(school => {
    
    if (school.id  === id) 
      return( {...school, [name]: value})
    
    else 
      return school;
    })
      
    setEducation(updatedEducation)
 
    setEducationForm(prevEducationForm => ({
      ...prevEducationForm, 
      [name]: value
      })
    )    
        
  }
const deleteEducation = (id) => {

  let filteredEducation = education.filter((school => school.id !== id ));
console.log('jer')


  setEducation(filteredEducation)  
  setEducationForm(filteredEducation.at(-1))


}

if(education.length === 0 ){
    
  console.log('here')
  const newId = uuid();
  const newEducation = {
    id: newId,
    name:'Update School/University',
    major: 'Update Major',
    location:'Update City',
    date: ''
  }
  setEducation([newEducation])  
  setEducationForm(newEducation)
}
   
  return (
    <div className='container'>
      <div id='sidebar'>
        <PersonalInfoInput 
          props =  { personalInfo }
          changeHandler = { handlePersonalChange }
        /> 
        
      
        <WorkExperienceForm
          details = { workForm }
          onChangeHandler = { handleUpdateWorkHistoryForm }
          addHandler = { handleCreateWorkHistory } />
   
  
        <EducationForm 
          details = { educationForm }
          onChangeHandler = { updateEducationForm }
          createHandler = { createEducation } 
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
        
        <EducationDetails 
          details = { education } 
          deleteHandler = { deleteEducation }
          readHandler = { readEducation }
        />
      </div>
    </div>
  )
}

export default App
