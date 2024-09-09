import { useId } from "react";
import PropTypes from 'prop-types';
PersonalInfoForm.propTypes = {
    personalInfo: PropTypes.shape({
      fullName: PropTypes.string,
      address: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    changeHandler: PropTypes.func.isRequired,
};

 function PersonalInfoForm({ personalInfo, changeHandler }) {

  
  const id = useId();
 

    return (
     
      <div className = "personal-details-form">
       
   
        <h4>Personal Details</h4>

        <label htmlFor = {id + "-name"}>Full Name: </label><br/>
        <input 
          type = "text"
          onChange = {changeHandler} 
          name = "fullName"
          value = { personalInfo.fullName }
          id = {id + "-name"}
         
        />
        
        <label htmlFor = {id + "-address"}>Address: </label><br/>
        <input 
          type = 'text'
          onChange = {changeHandler}
          name = "address"
          value = {personalInfo.address}
          id = {id + "-address"}
        />
       
        <label htmlFor = {id + "-phone"}>Phone: </label><br/>
        <input 
          type = 'phone'
          onChange = {changeHandler}
          name = "phone"
          value = {personalInfo.phone}
          id = {id + "-phone"}
        />
        <br/>

        <label htmlFor = {id + "-email"}>E-mail: </label> <br/>
        <input 
          type = 'email'
          onChange = {changeHandler}
          name = "email"
          value = {personalInfo.email}
          id = {id + "-email"}
        />
    </div>
  )}

  export default PersonalInfoForm;