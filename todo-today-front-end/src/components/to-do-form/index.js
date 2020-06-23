import React, { useState, useEffect } from "react";
import './form.scss';

export default function Form(props) {

    // let [handleSubmit, handleChange] = useForm(saveFromHook);

    // function saveFromHook(formValues) {
    //     props.createNewInviteation({
    //         ...fromValues,
    //         accepted: false,
    //     });

    // TODO: use fetch to POST
    // }

    // let name =values.name;
    // useEffect(() => {
    //     document.title = 'New Invite: ${name}'
    // }, [name]);


    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    //const [createdBy, setCreatedBy] = useState("");
    //const [startTime, setStartTime] = useState(Date.now());
    //const [dueTime, setDueTime] = useState(Date.now());
    const [assignedTo, setAssignedTo] = useState("");
    //const [description, setDescription] = useState("");
    //const [estimateTimeToComplete, setEstimatedTimeToComplete] = useState("");
    const [difficulty, setDifficulty] = useState(1);
    const [complete, setComplete] = useState(false);

    function getDataFromApi() {
        props.onReceiveResults(id, title, assignedTo, difficulty, complete);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.target;

        //if (this.state.Title) {

            //this.props.toggleLoading();

            //   let request = {
            //     url: this.state.url,
            //     method: this.state.method,
            //   };

            getDataFromApi();

            // Clear old settings
            //   let url = '';
            //   let method = '';

            //   this.setState({ request, url, method });
            form.reset();

            //this.props.toggleLoading();
        //}

        //else {
            //alert('missing information');
        //}
    }

    return (
        <div className="form-wrapper">
            <h1>the TASK</h1>
            <form data-testid="form" className="form" onSubmit={handleSubmit}>
                <label >
                    <span>Task:</span>
                    <input name="Title" type="text" onChange={setTitle} />
                </label>
                <label >
                    <span>Assign Someone:</span>
                    <input name="Assignee" type="text" onChange={setAssignedTo} />
                </label>
                <label >
                    <span>Rate from 1 to 5 how difficult it might be:</span>
                    <input name="DifficultyTating" type="number" onChange={setDifficulty} />
                </label>
                <label >
                    <input name="TaskId" type="hidden" value="1" onChange={setId} />
                    <input name="taskComplete" type="hidden" value="false" onChange={setComplete} />
                </label>
                <button type="submit">Get it To-DONE!&trade;</button>
            </form>
        </div>
    );
}