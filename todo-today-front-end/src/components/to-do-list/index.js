import React from 'react';
import './list.scss';
import useFetch from './../../hooks/useFetch';

export default function ToDoList(props) {
    // var str = '8 rabbits, that\'s 16 rabbit ears';
    // str = str.replace(/(\d+)/g,function(a){return Array(+a+1).join('*')});
    console.log(props.data);

    return (
        <div className="list">
            <h1>the LIST</h1>
                {props.data.map((item, index) => (
                    <div key ={index}>
                        <h2>{item.title}</h2>
                        <h3>{item.assignedTo}</h3>
                        {/* for (let i = 0; i < {item.difficulty}; i++) {
                        <img src="./../../assets/gold-star.png" />
                       } */}
                    </div>
                ))}
        </div>
    );
}