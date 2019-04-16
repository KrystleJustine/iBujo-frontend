import React, {Component} from 'react';

export default class TaskForm extends Component {

    ////////////////////////////////////// SET UP DEFAULT STATE FOR NEW TASKS///////////////////////////
    state = {
        title : "",
        description : "",
        status : ""
    };




    handleChange = (e) => {
            console.log('When it changes',e.target.name);
        this.setState({
            // use brackets to show what the target EVALUATES to
            // updates all 3 fields at once
            [e.target.name] : e.target.value
        })
    };

    render (){
        return(
            <form onSubmit={(e) => {this.props.handleSubmit(e, {task: this.state})}}>
                <input type="text" onChange={this.handleChange} value={this.state.title} name="title"  placeholder="Enter Task Title"/>
                <input type="text" value={this.state.description} name="description" onChange={this.handleChange} placeholder="Enter Task Description"/>
                <select value={this.state.status} name="status" onChange={this.handleChange}>
                    <option value="toDo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="event">Event</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="migrated">Migrated</option>
                    <option value="important">Important</option>
                    <option value="meeting">Meeting</option>
                </select>
                <input type="submit" value="Create Task"/>
            </form>
        )
    }

}