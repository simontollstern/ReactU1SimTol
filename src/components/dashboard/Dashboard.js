import React, { Component } from 'react';
import Card from '../card/Card';
import UserList from '../userlist/UserList';
import User from '../user/User';
import EditUser from '../edituser/EditUser';
import style from './Dashboard.module.css';

// Wrapper for everything and handles logic for users
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: ['User1', 'User2', 'User3'],
      colorToggled: false
    }
  }

  // Toggle between 2 colors (true/false)
  toggleColor = () => {
    this.setState({ colorToggled: !this.state.colorToggled });
  }

  // Adds a new user to the user array with data from parameter
  addUser = (input) => {
    this.setState({ users: this.state.users.concat(input) })
  }

  // Removes the last user from the array
  removeUser = () => {
    this.setState({ users: this.state.users.slice(0, this.state.users.length - 1)})
  }

  render(){
    return(
      <div className={style.dashboard}>
        <Card>
          <UserList onToggleColor={this.toggleColor}>
            {this.state.users.map((user, key) => {
              return <User key={key} name={user} colorToggled={this.state.colorToggled} />
            })}
          </UserList>
        </Card>
        <Card>
          <EditUser onAddUser={this.addUser} onRemoveUser={this.removeUser} />
        </Card>
      </div>
    );
  }
}

export default Dashboard;
