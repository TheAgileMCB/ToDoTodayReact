import React from 'react';
import './list.scss';

export default function ToDoList(props) {
    // var str = '8 rabbits, that\'s 16 rabbit ears';
    // str = str.replace(/(\d+)/g,function(a){return Array(+a+1).join('*')});

    return (
        <div className="list">
            <h1>the LIST</h1>
            {/* {history.map(item => {
                <li><h2>{item.title}</h2>
                <h3><span>{item.startTime}</span><span>{this.props.DueTime}</span></h3>
                <h3>{item.assignee}</h3></li>
            })} */}

        </div>
    );
}