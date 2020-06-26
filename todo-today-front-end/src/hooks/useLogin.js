import { useState } from 'react';
import { AuthContext } from '../contexts/auth';

//usage: useForm(saveItem)

export default function useLogin(onSubmit) {

    const [login, setLogin] = useState({});

    //contextType = AuthContext;

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(login)
    };

    const handleChange = e => {
        e.persist();
        setLogin(login => ({ login, [e.target.name]: e.target.value }));
    };

    //const { username, password } = e.target.elements;

    //user.login(username.value, password.value);

    // logoutSubmit = e => {
    //     e.prefentDefault();
    //     contextType.logout();
    // }


    return {
        handleSubmit,
        handleChange,
        //logoutSubmit,
        login
    };
};