import React from 'react';
import TaskCard from './TaskCard'

const TaskList = (props) => {
    console.log(props);
   const taskArray = (props.tasks.map(task => {
                return <TaskCard task={task} key={task.id} handleDelete={props.handleDelete}/>
            })
        );

return (
        <div className='TaskList'>
            {taskArray}
        </div>
    )
};

export default TaskList