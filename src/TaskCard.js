import React from 'react';

const TaskCard= (props) => {

        return (
            <div className="TaskCard">
                <h1>{props.task.title}</h1>
                <h3>{props.task.description}</h3>
                <button onClick={()=> {props.handleDelete(props.task)}}>Delete</button>
            </div>
        )
    };

export default TaskCard