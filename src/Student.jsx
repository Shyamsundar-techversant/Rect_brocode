import PropTypes from 'prop-types';
function Student(props){
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}
Student.defaultProps = {
    name : "sree",
    age : 2,
    isStudent : false
}
export default Student;
    