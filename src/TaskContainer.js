import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Search from './Search';


export default class TaskContainer extends Component {
    ////////////////////////////////////// INITIALIZES STATE ///////////////////////////////////////
    state = {
        tasks : [],
        // sets up show status as an empty array
        searchTerm : ''
    };


    ////////////////////////////////// PULLS TASKS FROM BACKEND /////////////////////////////////////
    componentDidMount(){
        fetch('http://localhost:3007/tasks')
            .then(resp=> resp.json())
            .then(respJSON => {
                    this.setState({
                        tasks : respJSON
                    })
                }
            )
    }

    handleSubmit = (event, taskObj) => {
        event.preventDefault();
        fetch ('http://localhost:3007/tasks', {
            method: 'POST',
            headers: {
                "Accepts": 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)})
            .then(resp => resp.json())
            .then(taskObj => {
                const newSetOfTasks = [taskObj, ...this.state.tasks];
                this.setState({
                    tasks: newSetOfTasks
                })
            });
        // update state with new task... make a new array with
        // task info... add new task object to the top of the list

    };

    handleSearchChange = (e) => {
        this.setState({
            "searchTerm": e.target.value
        })
    };

handleDelete = (taskToRemove) => {
    const updatedTaskArray = this.state.tasks.filter(task => task.id !== taskToRemove.id);
    this.setState({
        tasks : updatedTaskArray
        }, () => this.handleDeleteBackEnd(taskToRemove));
};

handleDeleteBackEnd = (taskToDelete) => {
    fetch(`http://localhost:3007/tasks/${taskToDelete.id}`, {method : 'DELETE'})
};



filtered = (e) => {
    if(e.target.value === "All") {
        this.setState({
            filterTasks: this.state.tasks
        })
    }else {
            let selectedStatus = this.state.tasks.find(task =>{
                return task.status === e.target.value
            });
        this.setState({
            filteredTasks : selectedStatus
        })

    }
};


   render() {
       console.log(this.state.tasks, "Tasks sent down")
        const filteredTask = this.state.tasks.filter(task=> {
            // forces comparison to both be lowercase for more wide
           return task.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        });
       return (
           <div className="TaskContainer">
               <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
               <TaskForm handleSubmit={this.state.handleSubmit} handleAdd={this.handleAdd}/>
               <TaskList tasks={filteredTask} handleDelete={this.handleDelete} />

           </div>
       )

   }

};

//tasks={this.state.tasks} handleClick={this.handleClick} handleSubmit={this.handleSubmit}

// const taskCards = filteredTasks.map(task => {
//     return <TaskCard key={task.id} title={task.title} />
// });