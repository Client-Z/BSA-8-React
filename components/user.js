import React, {Component}  from  "react";

//import "../style/user.css";

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
          <div className="user">
            <span>{ this.props.id }</span> - <span>{ this.props.name }</span>
              <button onClick={this.handleDeleteUser}>Delete User</button>
          </div>
        );
    }
}

export default User;