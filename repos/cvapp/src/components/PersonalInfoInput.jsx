import React, { useId , useState} from "react";

 function PersonalInfoInput({props, changeHandler }) {

  
  const id = useId();
  console.log(props)

  const editHandler = () => {
    console.log('edit')
    setIsReadOnly(false);
  }

  const [isReadOnly, setIsReadOnly] = useState(false);
//find a better way to do this
  const submitHandler = () => {
    document.getElementById('personal-details').style.display = 'block';
    setIsReadOnly(true);
  }
    return (
     
      <div className = "personal-details-form">
        <hr/>
   
        <h4>Personal Details</h4>

        <label htmlFor = {id + "-name"}>Full Name: </label><br/>
        <input 
          type = "text"
          onChange = {changeHandler} 
          name = "fullName"
          value = { props.fullName }
          id = {id + "name"}
          readOnly = {isReadOnly}
        />
        
        <label htmlFor = {id + "-address"}>Address: </label><br/>
        <input 
          type = 'text'
          onChange = {changeHandler}
          name = "address"
          value = {props.address}
          id = {id + "-address"}
          readOnly = {isReadOnly}
        />
       
        <label htmlFor = {id + "-phone"}>Phone: </label><br/>
        <input 
          type = 'phone'
          onChange = {changeHandler}
          name = "phone"
          value = {props.phone}
          id = {id + "phone"}
          readOnly = {isReadOnly}
        />
        <br/>

        <label htmlFor = {id + "-email"}>E-mail: </label> <br/>
        <input 
          type = 'email'
          onChange = {changeHandler}
          name = "email"
          value = {props.email}
          id = {id + "email"}
          readOnly = {isReadOnly}
        />
        
        <button type="button" onClick={submitHandler}> Save </button>
        <button type="button" onClick={editHandler}> Edit </button>
    </div>
  )}

  export default PersonalInfoInput;