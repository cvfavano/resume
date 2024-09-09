import { useState } from 'react'
import './App.css'
import  uuid  from 'react-uuid';
import PersonalInfoForm from './components/PersonalInfoForm.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import WorkExperienceForm from './components/WorkExperienceForm.jsx'
import WorkExperienceDetails from './components/WorkExperienceDetails.jsx'
import EducationForm from './components/EducationForm.jsx'
import EducationDetails from './components/EducationDetails.jsx' 
import Data from './Data.jsx'

function App() {

  //TODO, toggle edit mode
  //const [showButtons, setButtons] = useState(true);


  const [personalInfo, setPersonalInfo] = useState(Data.personalInfo)
  const [experience, setExperience] = useState([Data.experience])
  const [workForm, setWorkForm] = useState(Data.experience)
  const [education, setEducation] = useState([Data.education])
  const [educationForm, setEducationForm] = useState(Data.education)

  const updatePersonalInfo = (event) => {
    
    const {name, value} = event.target;

    setPersonalInfo(previousState => ({
      ...previousState,
      [name]: value
    }))
  }

  const deleteExperience = (id) => {

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

  const updateWorkExperience = (event, id) => {

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

 
   
  
  const createWorkExperience = () => {
   
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
 
  const readExperience = (id) => {

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

    setEducation(filteredEducation)  
    setEducationForm(filteredEducation.at(-1))
  }

  if(education.length === 0 ){
      
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
        <PersonalInfoForm 
          personalInfo =  { personalInfo }
          changeHandler = { updatePersonalInfo }
        /> 
      
        <WorkExperienceForm
          details = { workForm }
          onChangeHandler = { updateWorkExperience }
          addHandler = { createWorkExperience } />
  
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
            deleteHandler = { deleteExperience } 
            editHandler = { readExperience }  
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
