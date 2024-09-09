import uuid from 'react-uuid'
import PropTypes from 'prop-types';
EducationForm.propTypes = {
    details: PropTypes.array.isRequired,
    createHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
};
function EducationForm(props) {
     console.log(props)
    // console.log(props.name)
    const id = uuid();
 
    return(
        <div className="education-form-container">
            
            <button type = "text" onClick={ ()=>{props.createHandler(event, props.details.id)} }>Add More</button>
            <h4>Education</h4>

            <label htmlFor ={id +'name'}>Name</label>
            
            <input 
                value = {props.details.name}
                name= 'name'
                type='text'
                id={id + 'name'}
                onChange = { ()=>{props.onChangeHandler(event, props.details.id)} }
            />

            <label htmlFor ={id +'date'}>Graduation Date</label>
            <input 
                value = {props.details.date}
                name = 'date'
                type = 'date'
                id= { id + 'date' }
                onChange = { ()=>{props.onChangeHandler(event, props.details.id) }}
            />

            <label htmlFor ={ id +'major' }>Major</label>
            <input 
                value = { props.details.major }
                name = 'major'
                type = 'text'
                id = { id + 'major'}
                onChange = { ()=>{props.onChangeHandler(event, props.details.id) }}
            />
            
            <label htmlFor = { id + 'location' }>Location</label>
            <input 
                value = { props.details.location }
                name = 'location'
                type = 'text'
                id = {id + 'location' }
                onChange = { ()=>{props.onChangeHandler(event, props.details.id) }}
            />
        </div>
    )

}

export default EducationForm