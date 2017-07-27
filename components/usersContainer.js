import React, {Component}  from  "react";

import UserAdd from './userAdd';
import UserList from './userList';


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
        let i = 0;
        while( i < users.length ){
            if(users[i].id === id) {
                users.splice(i, 1);
                break;
            }
            i++;
        }

        this.setState({userList: users})
    }

    handleUserSubmit(user) {
        let updateUsers = this.state.userList;
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