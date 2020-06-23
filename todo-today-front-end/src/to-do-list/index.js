import React from 'react';

export default function ToDoList(props) {
    // var str = '8 rabbits, that\'s 16 rabbit ears';
    // str = str.replace(/(\d+)/g,function(a){return Array(+a+1).join('*')});

    return (
        <div className="list">
            <h1>{this.props.Title}</h1>
            <h2><span>{this.props.StartTime}</span><span>{this.props.DueTime}</span></h2>
            <h2>{this.props.Assignee}</h2>
        </div>
    );
}