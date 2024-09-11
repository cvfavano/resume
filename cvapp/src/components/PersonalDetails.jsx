import PropTypes from 'prop-types';
PersonalDetails.propTypes = {
    details: PropTypes.array.isRequired,
    createHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
};
function PersonalDetails(props) {



    return (
        
        
     <div id="personal-details">
        <p className='cv-name'>{props.details.fullName}</p>
        <p>{props.details.address}</p>
        <p>
            {props.details.email}   &#10021;  <span>{props.details.phone}</span>
        </p>
        
        
    </div>
        
    )
}

export default PersonalDetails;