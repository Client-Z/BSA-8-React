import React, {Component}  from  "react";

import UserAdd from './userAdd';
import UserList from './userList';

import '../styles/users.css';


class UsersContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: []
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        let users = this.state.userList;

        for(let i = 0; i < users.length; i++){
            if(users[i].id === id) {
                users.splice(i, 1);
                break;
            }
        }

        this.setState({userList: users})
    }

    handleUserSubmit(user) {
        let updateUsers = this.state.userList;
        user.id = Math.random() * 10000;
        console.log(user.id);
        updateUsers.push(user);
        this.setState({userList: updateUsers});
    }

    render() {
        return (
            <div className="container">
                <UserAdd onUserSubmit={ this.handleUserSubmit } />
                <UserList userList={this.state.userList} deleteUser={ this.deleteUser}/>
            </div>
        );
    }
}

export default UsersContainer;