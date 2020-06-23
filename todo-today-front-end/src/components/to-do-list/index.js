import React from 'react';
import './list.scss';

export default function ToDoList() {
    // var str = '8 rabbits, that\'s 16 rabbit ears';
    // str = str.replace(/(\d+)/g,function(a){return Array(+a+1).join('*')});

    return (
        <div className="list">
            <h1>the LIST</h1>
            {/* <h2>{this.props.Title}</h2>
            <h3><span>{this.props.StartTime}</span><span>{this.props.DueTime}</span></h3>
            <h3>{this.props.Assignee}</h3> */}
        </div>
    );
}