//useForm(saveItem)

function useFrom(onSubmit) {
    const [values, setValues] = setState({});
    // { name: 'Keith', dinnerPrefs: 'chicken' }

    const handSubmit = e => {
        e.preventDefault();
        onSubmit(values);
    }

    return [
        handleSubmit,
    ];
}