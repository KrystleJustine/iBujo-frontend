import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Search from './Search';
import TaskFilter from './TaskFilter'


export default class TaskContainer extends Component {
////////////////////////////////////// INITIALIZES STATE ///////////////////////////////////////
    state = {
        tasks : [],
        // sets up show status as an empty array
        searchTerm : '',
        statusTerm: '',
        filteredTasks : ''


    };


////////////////////////////////// PULLS TASKS FROM BACKEND /////////////////////////////////////
    componentDidMount(){
        fetch('http://localhost:3007/tasks')
            .then(resp=> resp.json())
            .then(respJSON => {
                const arr = respJSON.reverse();
                    this.setState({
                        tasks : arr
                    })
                }
            )
    }

    // when a user adds a new task from form
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
                }, console.log (this.state.tasks))
            });
        // update state with new task... make a new array with
        // task info... add new task object to the top of the list

    };

// when a user types in a letter in the search bar, search term updates with every key stroke
handleSearchChange = (e) => {
    this.setState({
        "searchTerm": e.target.value
    })
};


// removes the task on the front end
handleDelete = (taskToRemove) => {
    const updatedTaskArray = this.state.tasks.filter(task => task.id !== taskToRemove.id);
    this.setState({
        tasks : updatedTaskArray
        }, () => this.handleDeleteBackEnd(taskToRemove));
};
// removes the task off the back end to persist when page reloads
handleDeleteBackEnd = (taskToDelete) => {
    fetch(`http://localhost:3007/tasks/${taskToDelete.id}`, {method : 'DELETE'})
};


// when a user clicks ta status from the drop down menu, it should show that category of status
filteredStatus = (e) => {
    console.log("this is the value of status when clicked", e.target.value);
    // if the user chooses "All" return the whole list of tasks
    if(e.target.value === "All") {
        this.setState({
            filteredTasks : this.state.tasks,
            statusTerm: e.target.value
        })
    }else {
        // filter each status by the category of what was clicked
            let selectedStatus = this.state.tasks.filter(task =>{
                return task.status === e.target.value
            });
        this.setState({
            filteredTasks : selectedStatus,
            statusTerm: e.target.value
        })
    }
};


combineFilters = () => {
    let taskList = [...this.state.tasks];

    if (this.state.searchTerm.length > 0) {
        // forces comparison to both be lowercase for more wide
        taskList = taskList.filter(task=>
            task.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
    }

    if (this.state.statusTerm.length > 0) {
        taskList = taskList.filter(task => task.status === this.state.statusTerm || this.state.statusTerm === 'All');
    }

    return taskList
};

   render() {
        let filteredTaskList = this.combineFilters();
        return (
           <div className="TaskContainer">
               <TaskFilter filteredStatus={this.filteredStatus} handleClick={this.handleClick}/>
               <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
               <TaskForm handleSubmit={this.handleSubmit}/>
               <TaskList tasks={filteredTaskList}  handleDelete={this.handleDelete} />
           </div>
       )
    }
};