import { useState } from 'react';

//usage: useForm(saveItem)

export default function useFrom(onSubmit) {

    const [values, setValues] = setState({});
    // { name: 'Keith', dinnerPrefs: 'chicken' }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(values);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(values => ({
            ...values,
            [name]: value,
        }));
    }

    return [
        handleSubmit,
        handleChange
    ];
}