import React, {Component}  from  "react";


class UserAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            id: '',
            placeholder: 'write here...'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }

    handleUserNameChange(event){
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        let name = this.state.name;

        if( name.length < 2 ) {
            this.setState({ placeholder: "Write your name, please!"});
            return ;
        }

        this.props.onUserSubmit({ name: name});
        this.setState({name: '', placeholder: "Write your name, please!"})
    }

    render() {
        return (
            <form className="createUserForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="inputName"
                    placeholder={'write here...' || this.state.placeholder}
                    value={this.state.name}
                    onChange={this.handleUserNameChange}
                />
                <input type="submit" value="Add" className="buttonSubmit" />
            </form>
        )
    }
}

export default UserAdd;
