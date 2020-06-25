import { useState } from 'react';

//usage: useForm(saveItem)

export default function useForm(onSubmit) {

    const [values, setValues] = setState({});

    const handleSubmit = e => {
        if (e) e.preventDefault();
        onSubmit(values);
    };

    const handleChange = e => {
        e.persist();
        setValues(vales => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleSubmit,
        handleChange,
        values
    };
};