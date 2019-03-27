import React, { Component } from 'react';
import style from './UserList.module.css';

// The list containing User component, also notifies Dashboard to toggle the color of User
class UserList extends Component{

  // Sends an event to Dashboard to toggle User color
  toggleColor = () => {
    this.props.onToggleColor();
  }

  render(){
    return(
      <div className={style.userlist}>
        <ul>
          {this.props.children}
        </ul>
        <button onClick={this.toggleColor}>Toggle colors</button>
      </div>
    );
  }
}

export default UserList;
