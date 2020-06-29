import React from 'react';
import { Link } from 'react-router-dom';
import './board.scss';
import goldStar from '../../assets/gold-stars.png';

export default function ToDoBoard(props) {
    const list = props.list || [];

    function starmaker(num) {
        return [1, 2, 3, 4, 5].map(x => x <= num ? <img key={x} src={goldStar} style={{ width: "1rem" }} alt="A gold star!" /> : null);
    }

    // const drop = e => {
    //     e.preventDefault();
    //     const card_id = e.dataTRansfer.getData('card_id');

    //     const card = document.getElementById(card_id);
    //     card,style.display = 'block';

    //     e.target.appendChild(card);
    // }

    return (
        <div className="board">
            <h1>The BOARD</h1>
            <div className="board-div">
                {list.map(item => (
                    <div
                        className={`completed-${item.completed.toString()} card`}
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
            </div>
        </div>
    );
}