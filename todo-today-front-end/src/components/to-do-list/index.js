import React from 'react';
import './list.scss';
import goldStar from '../../assets/gold-stars.png';
import useFetch from './../../hooks/useFetch';

export default function ToDoList(props) {
    // var str = '8 rabbits, that\'s 16 rabbit ears';
    // str = str.replace(/(\d+)/g,function(a){return Array(+a+1).join('*')});
    console.log(props.data);

    function starmaker(num) {
        return [1,2,3,4,5].map(x => x <= num ? <img key={x} src={goldStar} style={{width: "1rem"}} /> : null);
    }

    return (
        <div className="list">
            <h1>the LIST</h1>
            {props.data.map((item, index) => (
                <div className="list-item" key={index}>
                    <h2>{item.title}</h2>
                    <h3>{item.assignedTo}</h3>
                    <span>{starmaker(item.difficulty)}</span>
                </div>
            ))}
        </div>
    );
}