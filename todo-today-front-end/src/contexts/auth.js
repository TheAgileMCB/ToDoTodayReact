import React, { useContext } from 'react';

export const AuthContext = React.createContext();

export default function useAuth() {
    return useContext(AuthContext);
}

export class AuthProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,

            login: this.login,
        };
    }

    login = async (username, password) => {
        const result = await fetch("https://deltav-todo.azurewebsites.net/api/v1/todos/Login", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const body = await result.json();
        console.log(body);

        if (result.ok) {
            this.setState({ user: body });
            return;
        }

        this.logout();
    }

    logout = () => {
        this.setState({ user: null });
    }

    render() {

        const { user } = this.context;

        if (user) {
            return (
                <>
                    <h3>Welcome back, {user.username}!</h3>
                    <form onSubmit={this.logoutSubmit}>
                        <button>Log Out</button>
                    </form>
                </>)
        }

        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}