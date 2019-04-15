import React, { Component } from 'react';
import TaskContainer from './TaskContainer';


class App extends Component {





    // ////////////////////////////////////// HANDLE CLICK ACTION///////////////////////////////////////
    // handleClick = (id) => {
    //     let showTask = this.state.tasks.find(task => {
    //         return task.id === id
    //     });
    //     this.setState({
    //         // set state to variable created
    //         showTask : showTask
    //     })
    // };



   ////////////////////////////////////////// ALL THE THINGS APP RENDERS ///////////////////////////
  render() {

      return (
        <div id="App">
            <TaskContainer/>
        </div>
    )}
}
export default App;
