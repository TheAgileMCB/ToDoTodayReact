import React, { useState } from "react";

export default function Form(props) {


    const [taskId, setTaskId] = useState(0);
    const [title, setTitle] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [startTime, setStartTime] = useState(Date.now());
    const [dueTime, setDueTime] = useState(Date.now());
    const [assignee, setAssignee] = useState("");
    const [description, setDescription] = useState("");
    const [estimateTimeToComplete, setEstimatedTimeToComplete] = useState("");
    const [difficultyRating, setDifficultyRating] = useState(1);
    const [taskComplete, setTaskComplete] = useState(false);

    function getDataFromApi() {
        this.props.onReceiveResults(taskId, title, createdBy, startTime, dueTime, assignee, description, estimateTimeToComplete, difficultyRating, taskComplete);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let form = e.target;

        if (this.state.Title) {

            this.props.toggleLoading();

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

            this.props.toggleLoading();
        }

        else {
            alert('missing information');
        }
    }

    return (
        <div className="form-wrapper">
            <form data-testid="form" className="form" onSubmit={handleSubmit}>
                <label >
                    <span>Task:</span>
                    <input name="Title" type="text" onChange={setTitle} />
                </label>
                <label >
                    <span>Start After:</span>
                    <input name="StartTime" type="time" onChange={setStartTime} />
                </label>
                <label >
                    <span>Complete By:</span>
                    <input name="DueTime" type="time" onChange={setDueTime} />
                </label>
                <label >
                    <span>Assign Someone:</span>
                    <input name="Assignee" type="text" onChange={setAssignee} />
                </label>
                <label >
                    <span>Describe it:</span>
                    <input name="Description" type="text" onChange={setDescription} />
                </label>
                <label >
                    <span>Tell them how long it will take:</span>
                    <input name="EstimatedTimeToComplete" type="time" onChange={setEstimatedTimeToComplete} />
                </label>
                <label >
                    <span>Tell them how difficult it might be:</span>
                    <input name="DifficultyTating" type="number" onChange={setDifficultyRating} />
                </label>
                <label >
                    <input name="TaskId" type="hidden" value="1" onChange={setTaskId} />
                    <input name="CreatedBy" type="hidden" value="userId props?" onChange={setCreatedBy} />
                    <input name="taskComplete" type="hidden" value="false" onChange={setTaskComplete} />
                </label>
                <button type="submit">Get it To-DONE!&trade;</button>
            </form>
        </div>
    );
}