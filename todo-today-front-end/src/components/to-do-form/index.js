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
    const [assignedTo, setAssignedTo] = useState("");
    const [difficulty, setDifficulty] = useState(1);
    const [complete, setComplete] = useState(false);

    function getDataFromApi() {
        // let data = {id:id, 
        //         title:title, 
        //         assignedTo:assignedTo, 
        //         difficulty:difficulty, 
        //         complete:complete
        //     }
        props.onReceiveResults(id, title, assignedTo, difficulty, complete);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.target;

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
                <label >Task:</label>
                    <input required name="Title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <label >Assign Someone:</label>
                    <input required name="Assignee" type="text" value={assignedTo} onChange={e => setAssignedTo(e.target.value)} />

                <fieldset className="radio">
                    <legend>Rate how difficult it might be:</legend>
                    <label>1 Star</label>
                    <input id="1star" name="difficulty" type="radio" value="1" onChange={e => setDifficulty(e.target.value)} />
                    <label>2 Stars</label>
                    <input id="2star" name="difficulty" type="radio" value="2" onChange={e => setDifficulty(e.target.value)} />
                    <label>3 Stars</label>
                    <input id="3star" name="difficulty" type="radio" value="3" onChange={e => setDifficulty(e.target.value)} />
                    <label>4 Stars</label>
                    <input id="4star" name="difficulty" type="radio" value="4" onChange={e => setDifficulty(e.target.value)} />
                    <label>5 Stars</label>
                    <input id="5star" name="difficulty" type="radio" value="5" onChange={e => setDifficulty(e.target.value)} />
                </fieldset>

                    <input name="TaskId" type="hidden" value={id} onChange={e => setId(e.target.value + 1)} />
                    <input name="taskComplete" type="hidden" value={complete} onChange={e => setComplete(e.target.value)} />

                <button type="submit">Get it To-DONE!&trade;</button>
            </form>
        </div>
    );
}