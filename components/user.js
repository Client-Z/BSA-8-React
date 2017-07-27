import React, {Component}  from  "react";

//import "../style/users.css";

class User extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleDeleteUser() {
        let id = this.props.id;
        this.props.deleteUser(id);
    }

    render() {
        return (
          <li className="user">
            <span>{ this.props.name }</span><button onClick={this.handleDeleteUser}>Delete User</button>
          </li>
        );
    }
}

export default User;