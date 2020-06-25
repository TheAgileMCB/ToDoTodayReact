import React from 'react';
import { Link } from 'react-router-dom';
import './list.scss';
import goldStar from '../../assets/gold-stars.png';

export default function ToDoList(props) {

    const list = props.list || [];

    function starmaker(num) {
        return [1, 2, 3, 4, 5].map(x => x <= num ? <img key={x} src={goldStar} style={{ width: "1rem" }} /> : null);
    }

    return (
        <div className="list">
            <h1>the LIST</h1>
            <ul>
                {list.map(item => (
                    <li
                        className={`completed-${item.completed.toString()} list-item`}
                        key={item.id}
                    >
                        {/* <div className="list-item"> */}
                        <h2 onClick={() => props.handleCompleted(item.id)}>{item.title}</h2>
                        <h3>{item.assignedTo}</h3>
                        <span>{starmaker(item.difficulty)}</span>
                        <Link to={`/todo/${item.id}`}>
                            Details
                        </Link>
                        <button onClick={() => props.handleDelete(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}