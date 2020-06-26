import React, { useContext } from 'react';
import { AuthContext} from './../../contexts/auth';
import useLogin from '../../hooks/useLogin';

const Login = props => {

    //  contextType = AuthContext;
    // const handleSubmit = e => {
    //     e.preventDefault();

    //     const { username, password } = e.target.elements;

    //     user.login(username.value, password.value);
    // }

    // logoutSubmit = e => {
    //     e.prefentDefault();
    //     this.context.logout();
    // }

    const { handleChange, handleSubmit } = useLogin(onSubmit);

    function onSubmit(loginValues) {
        props.handleSubmit({
            loginValues,     
        });
    }



        if (props.loginValues) {
            return (
                <>
                    <h3>Welcome back, {props.loginValues.username}!</h3>
                    <form onSubmit={props.loginValues.logoutSubmit}>
                        <button>Log Out</button>
                    </form>
                </>)
        }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" name="username" onChange={handleChange} />
            <input placeholder="Password" type="password" name="password" onChange={handleChange} />
            <button>Login</button>
        </form>
    )
}

export default Login;