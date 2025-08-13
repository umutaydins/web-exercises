
import PropsTypes from 'prop-types'

function UserGreeting({isLoggedIn=true,userName="Guest"}) {
    
    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {userName}
    </h2>
    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>
    return (isLoggedIn ?  welcomeMessage:loginPrompt ); 

}
UserGreeting.propTypes = {
    userName: PropsTypes.string,
    isLoggedIn: PropsTypes.bool,
}

export default UserGreeting