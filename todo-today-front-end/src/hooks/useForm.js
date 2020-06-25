import { useState } from 'react';

//usage: useForm(saveItem)

export default function useForm(onSubmit) {

    const [values, setValues] = useState({});

    const handleSubmit = e => {
        if (e) e.preventDefault();
        onSubmit(values);
    };

    const handleChange = e => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleSubmit,
        handleChange,
        values
    };
};