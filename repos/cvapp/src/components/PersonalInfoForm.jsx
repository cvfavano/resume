import React, { useId } from "react";

 function PersonalInfoForm({ props, changeHandler }) {

  
  const id = useId();
 

    return (
     
      <div className = "personal-details-form">
       
   
        <h4>Personal Details</h4>

        <label htmlFor = {id + "-name"}>Full Name: </label><br/>
        <input 
          type = "text"
          onChange = {changeHandler} 
          name = "fullName"
          value = { props.fullName }
          id = {id + "-name"}
         
        />
        
        <label htmlFor = {id + "-address"}>Address: </label><br/>
        <input 
          type = 'text'
          onChange = {changeHandler}
          name = "address"
          value = {props.address}
          id = {id + "-address"}
        />
       
        <label htmlFor = {id + "-phone"}>Phone: </label><br/>
        <input 
          type = 'phone'
          onChange = {changeHandler}
          name = "phone"
          value = {props.phone}
          id = {id + "-phone"}
        />
        <br/>

        <label htmlFor = {id + "-email"}>E-mail: </label> <br/>
        <input 
          type = 'email'
          onChange = {changeHandler}
          name = "email"
          value = {props.email}
          id = {id + "-email"}
        />
    </div>
  )}

  export default PersonalInfoForm;