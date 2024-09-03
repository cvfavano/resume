import { useState } from 'react'
import './App.css'
import PersonalInfoInput from './components/PersonalInfoInput.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import WorkExperienceDetails from './components/WorkExperienceDetails.jsx'
import Education from './components/Education.jsx'
import EducationDetails from './components/EducationDetails.jsx'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Maki Bao',
    email: 'cali@google.com',
    phone: '(909) 876 - 1232',
    address: 'Carlsbad, CA'
  })

  const [experience, setExperience] = useState({
    company:'AGK Consulting',
    startDate: '2000-01-22',
    endDate: '2005-02-15',
    title: 'Consultant',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })

  const [education, setEducation] = useState({
    name:'ACS University',
    major: 'BSc Chemical Engineering',
    location:'London, UK',
    date: '2006-12-12'
  })

  {console.log(education)}
  const handlePersonalChange = (event, stateName) => {
    
    const {name, value} = event.target;

    stateName(previousState => ({
      ...previousState,
      [name]: value
    }))

    //how to append to experience. 
    //how to grab id and delete/edit specific experience
    //also applies to education
    
    console.log(personalInfo)
  }

  return (
    <div className='container'>
      <div id='sidebar'>
        <PersonalInfoInput 
          props =  { personalInfo }
          changeHandler = { () => {handlePersonalChange(event, setPersonalInfo)} }
        />

        <WorkExperience 
          props = {experience}
          changeHandler = { () => {handlePersonalChange(event, setExperience)}}
        />

      <Education 
        props = {education}
        changeHandler={ () => {handlePersonalChange(event, setEducation)} }
      />

      </div>
    
      <div id='main'>
    
        <PersonalDetails details = { personalInfo } />
        <WorkExperienceDetails details = { experience } />
        <EducationDetails details = { education } />
       
        
    
      </div>

    </div>
  )
}

export default App
