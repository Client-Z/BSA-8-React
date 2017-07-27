import React, {Component}  from  "react";

import User from './user';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userItem = this.props.userList.map((elem) => {
            return <User deleteUser={this.props.deleteUser} name={elem.name} id={elem.id} key={elem.id}  />
        });

        return (
            <ul className="user-list">
                { userItem }
            </ul>
        );
    }
}

export default UserList;