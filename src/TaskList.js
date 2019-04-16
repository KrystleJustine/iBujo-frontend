import React from 'react';
import TaskCard from './TaskCard'

const TaskList = (props) => {
    console.log(props);
   const taskArray = (props.tasks.map(task => {
     return(
       <ul className="auto-sized-grid" key={task.id}>
           <TaskCard task={task} key={task.id} handleDelete={props.handleDelete}/>
       </ul>
     )
   })
   );

return (
        <div className="column">
            {taskArray}
        </div>
    )
};

export default TaskList