import React, { useContext } from 'react';

export const SettingsContext = React.createContext();

// Just for convenience
export default function useSettings() {
  return useContext(SettingsContext);
}

export class SettingsProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            setTheme: this.setTheme,

            user: 'Matthew',
            setUser: this.setUser,
        };
    }

    setTheme = theme => this.setTheme({ theme });
    setUser = user => this.setUser({ user });

    render() {
        return (
            <SettingsContext.Provider value={this.state}>
                {this.props.children}
            </SettingsContext.Provider>
        )
    }
}