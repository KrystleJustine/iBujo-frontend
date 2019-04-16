import React from 'react';
//import { Container } from 'semantic-ui-react'

const TaskCard= (props) => {



        return (
            <div className="TaskCard">
                <h1>{props.task.title}</h1>
                <h3>{props.task.description}</h3>
                <h4>{props.task.status}</h4>

                <button onClick={()=> {props.handleDelete(props.task)}}>Delete</button>
            </div>
        )
};





export default TaskCard;
//
// const iconSwitch = (status) => {
//     switch (status) {
//         case 'toDo':
//             return <i className="tasks icon"></i>
//         case 'inProgress':
//             return <i className="sync icon"></i>
//         case 'event':
//             return <i className="circle outline icon"></i>
//         case 'completed':
//             return <i className="square icon"></i>
//         case 'cancelled':
//             return <i className="window close icon"></i>
//         case 'migrated':
//             return <i className="sign out alternate icon"></i>
//         case 'important':
//             return <i className="exclamation icon"></i>
//         case 'meeting':
//             return <i className="calendar alternate outline icon"></i>;
//
//     }
// };
// <Container>
//     <div className="ui cards" id="cardSetup">
//         <div className="card">
//             <div className="content">
//                 <button className="right attached ui icon button" onClick={()=> {props.handleDelete(props.task)}}>
//                     <i className="trash alternate icon"></i></button>
//                 <div className="center aligned header">{props.task.title}</div>
//                 <div className="description">{props.task.description}</div>
//
//             </div>
//             <div className="ui bottom attached button">
//                 <i className="tasks">{iconSwitch(props.task.status)}</i>
//                 {props.task.status}
//             </div>
//         </div>
//     </div>
// </Container>