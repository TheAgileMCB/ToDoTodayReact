import React from 'react';
import { Link } from 'react-router-dom';
import goldStar from '../../assets/gold-stars.png';


const list = list.list || [];

function starmaker(num) {
    return [1, 2, 3, 4, 5].map(x => x <= num ? <img key={x} src={goldStar} style={{ width: "1rem" }} alt="A gold star!" /> : null);
}

function Card (props) {
    return (
        {list.map(item => (
            <div
                id={item.id}
                onDrop={drop}
                onDragoOver={dragOver}
                className={`completed-${item.completed.toString()} card`}
                draggable="true"
                key={item.id}
            >
                <h2 onClick={() => props.handleCompleted(item.id)}>{item.title}</h2>
                <div className="list2">
                    <div className="stars">{starmaker(item.difficulty)}</div>
                    <h3>{item.assignedTo}</h3>
                </div>
                <div className="list3">
                    <Link to={`/todo/${item.id}`}>
                        Details
                    </Link>
                    <button onClick={() => props.handleDelete(item.id)}>
                        Delete
                    </button>
                </div>
            </div>
        ))}
    )
}

const dragOver = e => {
    e.stop.Propagation();
}