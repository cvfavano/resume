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

//how will this work, toggle edit mode
const [showButtons, setButtons] = useState(true);

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


  const handlePersonalChange = (event, stateName) => {
    
    const {name, value} = event.target;

    stateName(previousState => ({
      ...previousState,
      [name]: value
    }))
  }
const handleDelete = (id) => {
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
  const handleWorkHistoryForm = (event, id) => {
    console.log(id)


    const {name, value} = event.target;
    console.log(event.target);

    setExperience(previousExperience =>{
      console.log('here')
    console.log(previousExperience)
  
    // const editedExperience =   previousExperience.filter(experience => experience.id == id)
    // editedExperience[name] : value
        
  }
    )
    
    // setItems(prevItems => prevItems.map(item =>
    //   item.id === id ? { ...item, value: newValue } : item
  // ))
  }



  const handleCreateWorkHistory = (event) => {
   
    const newWorkHistory=  {
      id: uuid(),
      company:'New Company',
      startDate: '1122-11-12',
      endDate: '1122-12-12',
      title: 'Add Title',
      details:'Add Details'
    }
    
    setExperience(previousState => ([
      ...previousState,
      handleCreateWorkHistory
    ]))

    
  
  }
  const handleUpdate = (id) => {
    //grab item, put in form, handle onchange event, 
    //
  }
   

 

  

  return (
    <div className='container'>
      <div id='sidebar'>
        {/* <PersonalInfoInput 
          props =  { personalInfo }
          changeHandler = { () => {handlePersonalChange(event, setPersonalInfo)} }
        /> */}
  

        <WorkExperienceForm
          details = {experience}
          onChangeHandler = { handleWorkHistoryForm}
          addHandler = {handleCreateWorkHistory}
        />

      {/* <Education 
        props = {education}
        changeHandler={ () => {handlePersonalChange(event, setEducation)} }
      /> */}

      </div>
    
      <div id='main'>
{/*     
        <PersonalDetails details = { personalInfo } /> */}

        {experience.length != 0 && (
        <div>
          <h2 className='header'>Work Experience</h2>
          <WorkExperienceDetails 
            props = { experience } 
            deleteHandler = { handleDelete } 
            editHandler = { handleUpdate }  
          />
        </div>)
        }
        <EducationDetails details = { education } />
       
        
    
      </div>

    </div>
  )
}

export default App
