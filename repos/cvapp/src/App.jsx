import { useState } from 'react'
import './App.css'
import PersonalInfoInput from './components/PersonalInfoInput.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import WorkExperienceDetails from './components/WorkExperienceDetails.jsx'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  })

  const [experience, setExperience] = useState({
    company:'',
    startDate: '',
    endDate: '',
    title: '',
    details: ''
  })
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

  // const handleClickPersonal = () => {
  //   console.log('here');
  // }

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

      </div>
    
      <div id='main'>
   
    
        <PersonalDetails details = { personalInfo } />
        <WorkExperienceDetails details = {experience} />
        
   
        
      <h3>Education</h3>   
      </div>

    </div>
  )
}

export default App
