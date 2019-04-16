import React from 'react';

const TaskFilter = (props) => {

    return (
    <div className="TaskFilter">
        <select onChange={(e) => {props.filteredStatus(e)}}>
            <option value="All">All</option>
            <option value="toDo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="event">Event</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="migrated">Migrated</option>
            <option value="important">Important</option>
            <option value="meeting">Meeting</option>
        </select>
    </div>
    )
};

export default TaskFilter

