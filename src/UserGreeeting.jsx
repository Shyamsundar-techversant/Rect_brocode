import PropTypes from 'prop-types';
function UserGreeting(props){
    const welcomeMessage = <h2>Welcome : {props.username}</h2>;
    const loginPropmt = <h2>Please Log in to continue</h2>
    if(props.isLoggedIn){
        return welcomeMessage;
    }
    else{
        return loginPropmt;
    }
}
UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}
export default UserGreeting;