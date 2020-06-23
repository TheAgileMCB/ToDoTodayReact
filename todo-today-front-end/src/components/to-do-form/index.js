import React from "react";

export default function Form() {
    return (
      <div className="form-wrapper">
         <form data-testid="form" className="form" onSubmit={this.handleSubmit}>
              <label >
                <span>Task:</span>
                <input name="Title" type="text" onChange={this.handleChangeTitle} />
              </label>
              <label >
                <span>Complete By:</span>
                <input name="DueTime" type="time" onChange={this.handleChangeDueTime} />
              </label>      
              <label >
                <span>Assign Someone:</span>
                <input name="Assignee" type="text" onChange={this.handleChangeAssignee} />
              </label>      
              <label >
                <span>Describe it:</span>
                <input name="Description" type="text" onChange={this.handleChangeDescription} />
              </label>
              <label >
                <span>Tell them how long it will take:</span>
                <input name="EstimatedTimeToComplete" type="text" onChange={this.handleChangeEstimatedTimeToComplete} />
              </label>
              <label >
                <span>Tell them how difficult it might be:</span>
                <input name="DifficultyTating" type="number" onChange={this.handleChangeDifficultyRating} />
              </label>
              <label >
                <input name="TaskId" type="hidden" />
                <input name="CreatedBy" type="hidden" />
                <input name="StartTime" type="hidden" />
              </label>
              <button type="submit">Get it To-DONE!&trade;</button>
            </form>
      </div>
    );
}