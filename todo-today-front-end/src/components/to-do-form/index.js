import React from "react";
import useForm from'../../hooks/useForm';
import goldStar from '../../assets/gold-stars.png';
import './form.scss';

export default function Form(props) {

    const { handleChange, handleSubmit } = useForm(onSubmit);

    function onSubmit(formValues) {
       props.handleSubmit({
           ...formValues,
           difficulty: formValues.difficulty ? parseInt(formValues.difficulty) : 5,
       });
    }

    return (
        <div className="form-wrapper">
            <h1>the TASK</h1>
            <form data-testid="form" className="form" onSubmit={handleSubmit}>
                <label >Task:
                    <input required name="title" type="text" placeholder="Task to get to-DONE&trade;" onChange={handleChange} />
                </label>
                <label >Assign Someone:
                    <input required name="assignedTo" type="title" placeholder="Name the one who will get it to-DONE&trade;" onChange={handleChange} />
                </label>

                <fieldset className="radio">
                    <legend>Rate how difficult it might be:</legend>
                    <label><img src={goldStar} style={{width: "3rem"}} alt="A gold star!" />
                    <input id="1star" name="difficulty" type="radio" value="1" onChange={handleChange} />
                    </label>
                    <label><img src={goldStar} style={{width: "3rem"}} alt="A gold star!" />
                    <input id="2star" name="difficulty" type="radio" value="2" onChange={handleChange} />
                    </label>
                    <label><img src={goldStar} style={{width: "3rem"}} alt="A gold star!" />
                    <input id="3star" name="difficulty" type="radio" value="3" onChange={handleChange} />
                    </label>
                    <label><img src={goldStar} style={{width: "3rem"}} alt="A gold star!" />
                    <input id="4star" name="difficulty" type="radio" value="4" onChange={handleChange} />
                    </label>
                    <label><img src={goldStar} style={{width: "3rem"}} alt="A gold star!" />
                    <input id="5star" name="difficulty" type="radio" value="5" onChange={handleChange} />
                    </label>
                </fieldset>

                {/* <input name="TaskId" type="hidden" value={id} onChange={e => setId(e.target.value)} />
                <input name="taskComplete" type="hidden" value={complete} onChange={e => setComplete(e.target.value)} /> */}

                <button type="submit">Get it To-DONE!&trade;</button>
            </form>
        </div>
    );
}